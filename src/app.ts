import express, { type Express } from "express";
import http from "http";
import https from "https";
import fs from "fs";

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

// Express Config
const app: Express = express();
app.use(express.json());

// Router
import { apiV1Router } from "./router/v1/v1.routes.js";

// Routes
app.use("/v1", apiV1Router);

// Setup HTTP & HTTPS Servers
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

// Run HTTPS & HTTPS Servers
httpServer.listen(HTTP_PORT, () => {
	console.log(`Server is running on Port: ${HTTP_PORT}`);
});

httpsServer.listen(HTTPS_PORT, () => {
	console.log(`Server is running on Port: ${HTTPS_PORT}`);
});