import { type Request, type Response } from "express";

export const postHealthController = (req: Request, res: Response) => {
	res.status(200).send("POST request endpoint");
}

export const getHealthController = (req: Request, res: Response) => {
	res.status(200).send("GET request endpoint");
}

export const patchHealthController = (req: Request, res: Response) => {
	res.status(200).send("PATCH request endpoint");
}

export const deleteHealthController = (req: Request, res: Response) => {
	res.status(200).send("DELETE request endpoint");
}