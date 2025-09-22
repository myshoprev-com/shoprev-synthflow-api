import { Router } from "express";
import { shopmonkeyAuthTestController, shopmonkeyTireInvetoryController } from "../../../controller/v1/shopmonkey/shopmonkey.controller.js";
import { appointmentRouter } from "./appointments.routes.js";
import { customerRouter } from "./customers.routes.js";

// Router
export const shopMonkeyRouter: Router = Router();

// Auth Endpoints
shopMonkeyRouter.get("/auth-test", shopmonkeyAuthTestController);

// Customer Endpoints
shopMonkeyRouter.use("/customer", customerRouter);

// Inventory Endpoints
shopMonkeyRouter.post("/tire-inventory", shopmonkeyTireInvetoryController);

// Appointment Endpoints
shopMonkeyRouter.use("/appointments", appointmentRouter);