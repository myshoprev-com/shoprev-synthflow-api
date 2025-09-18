import { Router } from "express";
import { healthRouter } from "./health/health.routes.js";
import { shopMonkeyRouter } from "./shopmonkey/shopmonkey.routes.js";

// Router
export const apiV1Router: Router = Router();

// Routes
apiV1Router.use("/health", healthRouter);
apiV1Router.use("/shopmonkey", shopMonkeyRouter);