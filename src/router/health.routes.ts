import { Router } from "express";
import { postHealthController, getHealthController, patchHealthController, deleteHealthController } from "../controller/health.controller.js";

export const healthRouter: Router = Router();

healthRouter.post("/post", postHealthController);
healthRouter.get("/get", getHealthController);
healthRouter.patch("/patch", patchHealthController);
healthRouter.delete("/delete", deleteHealthController);