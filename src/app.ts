import express, { type Express } from "express";

const PORT = process.env.PORT || 3000;
const app: Express = express();

app.listen(PORT, () => {
	console.log(`Server is running on Port: ${PORT}`)
});