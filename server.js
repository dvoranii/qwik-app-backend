import express from "express";
import { saveContact } from "./src/utils/firebaseAdmin.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/contacts", (req, res) => {
  res.send("<h1>Hello from the server!</h1>");
});
app.post("/contacts", async (req, res) => {
  const { name, email, message } = req.body;
  const result = await saveContact({ name, email, message });
  res.status(200).json(result);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
