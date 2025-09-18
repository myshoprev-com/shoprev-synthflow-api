import { Router } from "express";
import { shopmonkeyAuthTestController, shopmonkeyCancelAppointmentController, shopmonkeyFindCustomerByPhoneNumberController, shopmonkeyListAppointmentsController, shopmonkeyNewAppointmentController, shopmonkeyNewCustomerController, shopmonkeyTireInvetoryController, shopmonkeyUpdateAppointmentController, shopmonkeyUpdateCustomerController } from "../controller/shopmonkey.controller.js";

// Router
export const shopMonkeyRouter: Router = Router();

// Auth Endpoints
shopMonkeyRouter.get("/auth-test", shopmonkeyAuthTestController);

// Customer Endpoints
shopMonkeyRouter.post("/customer/new", shopmonkeyNewCustomerController);
shopMonkeyRouter.post("/customer/phone-number", shopmonkeyFindCustomerByPhoneNumberController);
shopMonkeyRouter.post("/customer/email", shopmonkeyFindCustomerByPhoneNumberController);
shopMonkeyRouter.post("/customer/update", shopmonkeyUpdateCustomerController);

// Inventory Endpoints

shopMonkeyRouter.post("/tire-inventory", shopmonkeyTireInvetoryController);

// Appointment Endpoints
shopMonkeyRouter.post("appointments/create", shopmonkeyNewAppointmentController);
shopMonkeyRouter.get("/appointments/list", shopmonkeyListAppointmentsController);
shopMonkeyRouter.post("/appointments/update", shopmonkeyUpdateAppointmentController);
shopMonkeyRouter.post("/appointments/cancel", shopmonkeyCancelAppointmentController);