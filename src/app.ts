import express, { type Express } from "express";

const PORT = process.env.PORT || 3000;
const app: Express = express();

// Express Config
app.use(express.json());

// Router
import { shopMonkeyRouter } from "./router/shopmonkey.routes.js";
import { healthRouter } from "./router/health.routes.js";

// Routes
app.use("/health", healthRouter);
app.use("/shopmonkey", shopMonkeyRouter);

app.listen(PORT, () => {
	console.log(`Server is running on Port: ${PORT}`)
});