import { Router, type Request, type Response } from "express";

export const healthRouter: Router = Router();

healthRouter.post("/post", (req: Request, res: Response) => {
	res.status(200).send("POST request endpoint");
});

healthRouter.get("/get", (req: Request, res: Response) => {
	res.status(200).send("GET request endpoint");
});

healthRouter.patch("/patch", (req: Request, res: Response) => {
	res.status(200).send("PATCH request endpoint");
});

healthRouter.delete("/delete", (req: Request, res: Response) => {
	res.status(200).send("DELETE request endpoint");
});