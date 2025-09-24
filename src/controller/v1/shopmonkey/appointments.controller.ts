import { type Request, type Response } from "express";
import axios from "axios";
import { logger } from "../../../app.js";

const bearerToken = process.env.SHOPMONKEY_BEARER_TOKEN;

// Appointment Controllers
export const shopmonkeyNewAppointmentController = async (req: Request, res: Response) => {
	try {
		const { appointmentColor, appointmentName, appointmentStartDate, appointmentEndDate} = req.body;

		const axiosHeaderConfig = {
			headers: {
				Authorization: 'Bearer ' + bearerToken,
				'Content-Type': 'application/json'
			}
		}

		const shopMonkeyAppointment = {
			"color": appointmentColor,
			"name": appointmentName,
			"startDate": appointmentStartDate,
			"endDate": appointmentEndDate
		}

		const response = await axios.post("https://api.shopmonkey.cloud/v3/appointment", shopMonkeyAppointment, axiosHeaderConfig);

		logger.info(`Axios ${response.config.method} request to ${response.config.url} was successful`);

		res.send(response.data);
	} catch (error: any) {
		if (error.name = "AxiosError") {
			logger.error(`${error.name} from ${error.config.url} got ${error.response.data.message}`);
		}

		res.status(400).send(`${error.name} for ${req.url}`);
	}
}

export const shopmonkeyListAppointmentsController =  async (req: Request, res: Response) => {
	try {
		const axiosHeaderConfig = {
			headers: {
				Authorization: 'Bearer ' + bearerToken,
				'Content-Type': 'application/json'
			}
		}

		const response = await axios.get("https://api.shopmonkey.cloud/v3/appointment", axiosHeaderConfig);

		logger.info(`Axios ${response.config.method} request to ${response.config.url} was successful`);

		const shopmonkeyAppointments = response.data.data;

		res.send(shopmonkeyAppointments);
	} catch (error: any) {
		if (error.name = "AxiosError") {
			logger.error(`${error.name} from ${error.config.url} got ${error.response.data.message}`);
		}

		res.status(400).send(`${error.name} for ${req.url}`);
	}
}

export const shopmonkeyUpdateAppointmentController = async (req: Request, res: Response) => {
	try {
		const { appointmentId, appointmentName, appointmentStartDate, appointmentEndDate } = req.body;

		const axiosHeaderConfig = {
			headers: {
				Authorization: 'Bearer ' + bearerToken,
				'Content-Type': 'application/json'
			}
		}

		const shopMonkeyAppointment = {
			"name": appointmentName,
			"startDate": appointmentStartDate,
			"endDate": appointmentEndDate
		}

		const response = await axios.put(`https://api.shopmonkey.cloud/v3/appointment/${appointmentId}`, shopMonkeyAppointment, axiosHeaderConfig);

		logger.info(`Axios ${response.config.method} request to ${response.config.url} was successful`);

		const updatedShopmonkeyAppointment = response.data.data;

		res.send(updatedShopmonkeyAppointment);
	} catch (error: any) {
		if (error.name = "AxiosError") {
			logger.error(`${error.name} from ${error.config.url} got ${error.response.data.message}`);
		}

		res.status(400).send(`${error.name} for ${req.url}`);
	}
}

export const shopmonkeyCancelAppointmentController = async (req: Request, res: Response) => {
	try {
		const { appointmentId, appointmentCancellationNote } = req.body;

		const axiosHeaderConfig = {
			headers: {
				Authorization: 'Bearer ' + bearerToken,
				'Content-Type': 'application/json'
			}
		}

		const shopMonkeyAppointment = {
			"cancellationNote": appointmentCancellationNote
		}

		const response = await axios.patch(`https://api.shopmonkey.cloud/v3/shared_appointment/${appointmentId}/cancel`, shopMonkeyAppointment, axiosHeaderConfig);

		logger.info(`Axios ${response.config.method} request to ${response.config.url} was successful`);

		res.send(response.data);
	} catch (error: any) {
		if (error.name = "AxiosError") {
			logger.error(`${error.name} from ${error.config.url} got ${error.response.data.message}`);
		}

		res.status(400).send(`${error.name} for ${req.url}`);
	}
}