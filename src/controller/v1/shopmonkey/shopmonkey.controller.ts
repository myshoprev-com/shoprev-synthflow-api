import { type Request, type Response } from "express";
import axios from "axios";
import { logger } from "../../../app.js";

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

		logger.info(`Axios ${response.config.method} request to ${response.config.url} was successful`);

		res.send(token);
	} catch (error: any) {
		if (error.name = "AxiosError") {
			logger.error(`${error.name} from ${error.config.url} got ${error.response.data.message}`);
		}

		res.status(400).send(`${error.name} for ${req.url}`);
	}
}

// Inventory Controller
export const shopmonkeyTireInvetoryController = async (req: Request, res: Response) => {
	try {
		const axiosHeaderConfig = {
			headers: {
				Authorization: 'Bearer ' + bearerToken,
			}
		}

		const response = await axios.get("https://api.shopmonkey.cloud/v3/inventory_tire", axiosHeaderConfig);

		const shopMonkeyServiceList = response.data.data;
		
		logger.info(`Axios ${response.config.method} request to ${response.config.url} was successful`);

		res.send(shopMonkeyServiceList);
	} catch (error: any) {
		if (error.name = "AxiosError") {
			logger.error(`${error.name} from ${error.config.url} got ${error.response.data.message}`);
		}

		res.status(400).send(`${error.name} for ${req.url}`);
	}
}