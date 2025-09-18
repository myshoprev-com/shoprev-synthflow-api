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

		res.send(response.data.id);
	} catch (error) {
		console.error(error);

		res.send(error);
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

		res.send(response.data.data);
	} catch (error) {
		console.error(error);

		res.send(error);
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
				{
					"email": customerEmail
				}
			]
		}

		const response = await axios.post("https://api.shopmonkey.cloud/v3/customer/email/search", shopMonkeyEmails, axiosHeaderConfig);

		res.send(response.data.data);
	} catch (error) {
		console.error(error);

		res.send(error);
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

		res.send(response.data);
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