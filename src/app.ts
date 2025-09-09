import express, { type Express, type Request, type Response} from "express";

const PORT = process.env.PORT || 3000;
const app: Express = express();

// Routes
app.post("/", (req: Request, res: Response) => {
	res.status(200).send("POST request endpoint");
});

app.get("/", (req: Request, res: Response) => {
	res.status(200).send("GET request endpoint");
});

app.patch("/", (req: Request, res: Response) => {
	res.status(200).send("PATCH request endpoint");
});

app.delete("/", (req: Request, res: Response) => {
	res.status(200).send("DELETE request endpoint");
});

app.listen(PORT, () => {
	console.log(`Server is running on Port: ${PORT}`)
});