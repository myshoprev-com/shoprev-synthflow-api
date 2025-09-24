import { type Request, type Response } from "express";
import axios from "axios";
import { logger } from "../../../app.js";

const bearerToken = process.env.SHOPMONKEY_BEARER_TOKEN;

// Customer Controllers
export const shopmonkeyNewCustomerController = async (req: Request, res: Response) => {
	try {
		const { customerFirstName, customerLastName, customerPhoneNumber, customerEmail, customerType } = req.body

		const axiosHeaderConfig = {
			headers: {
				Authorization: 'Bearer ' + bearerToken,
				'Content-Type': 'application/json'
			}
		}

		const shopMonkeyCustomer = {
			"firstName" : customerFirstName,
			"lastName" : customerLastName,
			"customerType": customerType,
			"phoneNumbers" : [
				{
					"number": customerPhoneNumber
				}
			],
			"emails" : [
				{
					"email": customerEmail
				}
			]
		}

		const response = await axios.post("https://api.shopmonkey.cloud/v3/customer", shopMonkeyCustomer, axiosHeaderConfig);

		logger.info(`Axios ${response.config.method} request to ${response.config.url} was successful`);

		const newShopmonkeyCustomer = {
			id: response.data.data.id,
			firstName: response.data.data.firstName,
			lastName: response.data.data.lastName,
			publicId: response.data.data.publicId
		}

		res.status(201).send(newShopmonkeyCustomer);
	} catch (error: any) {
		if (error.name = "AxiosError") {
			logger.error(`${error.name} from ${error.config.url} got ${error.response.data.message}`);
		}

		res.status(400).send(`${error.name} for ${req.url}`);
	}
}

export const shopmonkeyFindCustomerByPhoneNumberController = async (req: Request, res: Response) => {
	try {
		const { customerPhoneNumber } = req.body;

		const axiosHeaderConfig = {
			headers: {
				Authorization: 'Bearer ' + bearerToken,
				'Content-Type': 'application/json'
			}
		}

		const shopMonkeyPhoneNumber = {
			"phoneNumbers" : [
				{
					"number" : customerPhoneNumber
				}
			]
		}

		const response = await axios.post("https://api.shopmonkey.cloud/v3/customer/phone_number/search", shopMonkeyPhoneNumber, axiosHeaderConfig);

		logger.info(`Axios ${response.config.method} request to ${response.config.url} was successful`);

		res.send(response.data.data);
	} catch (error: any) {
		if (error.name = "AxiosError") {
			logger.error(`${error.name} from ${error.config.url} got ${error.response.data.message}`);
		}

		res.status(400).send(`${error.name} for ${req.url}`);
	}
}

export const shopmonkeyFindCustomerByEmailController = async (req: Request, res: Response) => {
	try {
		const { customerEmail } = req.body;

		const axiosHeaderConfig = {
			headers: {
				Authorization: 'Bearer ' + bearerToken,
				'Content-Type': 'application/json'
			}
		}

		const shopMonkeyEmails = {
			"emails" : [
				customerEmail
			]
		}

		const response = await axios.post("https://api.shopmonkey.cloud/v3/customer/email/search", shopMonkeyEmails, axiosHeaderConfig);

		logger.info(`Axios ${response.config.method} request to ${response.config.url} was successful`);

		res.send(response.data.data);
	} catch (error: any) {
		if (error.name = "AxiosError") {
			logger.error(`${error.name} from ${error.config.url} got ${error.response.data.message}`);
		}

		res.status(400).send(`${error.name} for ${req.url}`);
	}
}

export const shopmonkeyUpdateCustomerController = async (req: Request, res: Response) => {
	try {
		const { customerFirstName, customerLastName, customerPhoneNumber, customerEmail, customerId } = req.body;

		const axiosHeaderConfig = {
			headers: {
				Authorization: 'Bearer ' + bearerToken,
				'Content-Type': 'application/json'
			}
		}

		const shopMonkeyCustomer = {
			"firstName" : customerFirstName,
			"lastName" : customerLastName,
			"phoneNumbers" : [
				{
					"number": customerPhoneNumber
				}
			],
			"emails" : [
				{
					"email": customerEmail
				}
			]
		}

		const response = await axios.put(`https://api.shopmonkey.cloud/v3/customer/${customerId}`, shopMonkeyCustomer, axiosHeaderConfig);

		logger.info(`Axios ${response.config.method} request to ${response.config.url} was successful`);

		res.send(response.data);
	} catch (error: any) {
		if (error.name = "AxiosError") {
			logger.error(`${error.name} from ${error.config.url} got ${error.response.data.message}`);
		}

		res.status(400).send(`${error.name} for ${req.url}`);
	}
}