import { Router } from "express";
import { shopmonkeyFindCustomerByEmailController, shopmonkeyFindCustomerByPhoneNumberController, shopmonkeyNewCustomerController, shopmonkeyUpdateCustomerController } from "../../../controller/v1/shopmonkey/customer.controller.js";

// Router
export const customerRouter: Router = Router();

// Customer Endpoints
customerRouter.post("/new", shopmonkeyNewCustomerController);
customerRouter.post("/phone-number", shopmonkeyFindCustomerByPhoneNumberController);
customerRouter.post("/email", shopmonkeyFindCustomerByEmailController);
customerRouter.post("/update", shopmonkeyUpdateCustomerController);