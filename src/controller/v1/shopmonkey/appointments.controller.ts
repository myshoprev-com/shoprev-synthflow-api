import { type Request, type Response } from "express";
import axios from "axios";

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

		res.send(response.data);
	} catch (error) {
		console.error(error);

		res.send(error);
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

		const appointments = JSON.stringify(response);

		res.send(appointments);
	} catch (error) {
		console.error(error);

		res.send(error);
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

		res.send(response);
	} catch (error) {
		console.error(error);

		res.send(error);
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

		res.send(response.data);
	} catch (error) {
		console.error(error);

		res.send(error);
	}
}