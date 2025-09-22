import express, { type Express } from "express";
import http from "http";
import https from "https";
import fs from "fs";
import winston from "winston";
import morgan from "morgan";

// HTTP & HTTPS Ports
const HTTP_PORT = process.env.HTTP_PORT || 3000;
const HTTPS_PORT = process.env.HTTPS_PORT || 8080;

// HTTPS Key and Certificate
const SSL_KEY = process.env.SSL_KEY || "/etc/letsencrypt/live/";
const SSL_CERT = process.env.SSL_CERT || "/etc/letsencrypt/live/";
const privateKey = fs.readFileSync(SSL_KEY, "utf8");
const certificate = fs.readFileSync(SSL_CERT, "utf8");

// HTTPS Credentials
const credentials = {
	key: privateKey,
	cert: certificate
}

// Winston
const { combine, timestamp, json, prettyPrint } = winston.format;

export const logger = winston.createLogger({
	format: combine(timestamp(), json(), prettyPrint()),
	transports: [
		new winston.transports.Console()
	],
});

// Morgan 
const morganMiddleware = morgan(
	JSON.stringify({
		"client-ip": ":remote-addr",
		"method": ":method",
		"url": ":url",
		"status": ":status",
		"response-time": ":response-time ms"
	})
);

// Express Config
const app: Express = express();
app.use(express.json());
app.use(morganMiddleware);

// Router
import { apiV1Router } from "./router/v1/v1.routes.js";

// Routes
app.use("/v1", apiV1Router);

// Setup HTTP & HTTPS Servers
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

// Run HTTPS & HTTPS Servers
httpServer.listen(HTTP_PORT, () => {
	logger.info(`Server is running on Port: ${HTTP_PORT}`);
});

httpsServer.listen(HTTPS_PORT, () => {
	logger.info(`Server is running on Port: ${HTTPS_PORT}`);
});