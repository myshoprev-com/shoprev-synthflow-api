import { Router, type Request, type Response } from "express";
import axios from 'axios';

export const shopMonkeyRouter: Router = Router();

const bearerToken = process.env.SHOPMONKEY_BEARER_TOKEN;

shopMonkeyRouter.get("/auth-test", async (req: Request, res: Response) => {
	try {
		const response = await axios.get("https://api.shopmonkey.cloud/v3/auth/apikey", {
			headers: {
				Authorization: 'Bearer ' + bearerToken
			}
		});

		const token = JSON.stringify(response.data.token);

		res.send(token);
	} catch (error) {
		console.error(error);

		res.send(error);
	}
});

shopMonkeyRouter.post("/customer/phone-number", async (req: Request, res: Response) => {
	try {
		const axiosHeaderConfig = {
			headers: {
				Authorization: 'Bearer ' + bearerToken,
				'Content-Type': 'application/json'
			}
		}

		const shopMonkeyPhoneNumber = {
			"phoneNumbers" : [
				{
					"number" : req.body.phoneNumber
				}
			]
		}

		const response = await axios.post("https://api.shopmonkey.cloud/v3/customer/phone_number/search", shopMonkeyPhoneNumber, axiosHeaderConfig);

		res.send(response.data.data);
	} catch (error) {
		console.error(error);

		res.send(error);
	}
});

shopMonkeyRouter.post("/customer/email", async (req: Request, res: Response) => {
	try {
		const axiosHeaderConfig = {
			headers: {
				Authorization: 'Bearer ' + bearerToken,
				'Content-Type': 'application/json'
			}
		}

		const shopMonkeyEmails = {
			"emails" : [
				req.body.email
			]
		}

		const response = await axios.post("https://api.shopmonkey.cloud/v3/customer/email/search", shopMonkeyEmails, axiosHeaderConfig);

		res.send(response.data.data);
	} catch (error) {
		console.error(error);

		res.send(error);
	}
});