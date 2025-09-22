import { Router } from "express";
import { shopmonkeyCancelAppointmentController, shopmonkeyListAppointmentsController, shopmonkeyNewAppointmentController, shopmonkeyUpdateAppointmentController } from "../../../controller/v1/shopmonkey/appointments.controller.js";


// Router
export const appointmentRouter: Router = Router();

// Appointment Endpoints
appointmentRouter.post("/create", shopmonkeyNewAppointmentController);
appointmentRouter.get("/list", shopmonkeyListAppointmentsController);
appointmentRouter.post("/update", shopmonkeyUpdateAppointmentController);
appointmentRouter.post("/cancel", shopmonkeyCancelAppointmentController);