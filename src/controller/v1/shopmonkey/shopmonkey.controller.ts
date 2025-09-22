import { type Request, type Response } from "express";
import axios from "axios";

const bearerToken = process.env.SHOPMONKEY_BEARER_TOKEN;

// Auth Controllers
export const shopmonkeyAuthTestController = async (req: Request, res: Response) => {
	try {
		const axiosHeaderConfig = {
			headers: {
				Authorization: 'Bearer ' + bearerToken,
			}
		}

		const response = await axios.get("https://api.shopmonkey.cloud/v3/auth/apikey", axiosHeaderConfig);

		const token = JSON.stringify(response.data.token);

		res.send(token);
	} catch (error) {
		console.error(error);

		res.send(error);
	}
}

// Inventory Controller
export const shopmonkeyTireInvetoryController = async (req: Request, res: Response) => {
	try {
		const axiosHeaderConfig = {
			headers: {
				Authorization: 'Bearer ' + bearerToken,
				'Content-Type': 'application/json'
			}
		}

		const response = await axios.post("https://api.shopmonkey.cloud/v3/inventory_tire/search", axiosHeaderConfig);

		res.send(response);
	} catch (error) {
		console.error(error);

		res.send(error);
	}
}