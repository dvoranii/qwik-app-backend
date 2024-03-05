import express from "express";
import { db, admin } from "./src/utils/firebaseAdmin.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/contacts", (req, res) => {
  res.send("<h1>Hello from the server!</h1>");
});
app.post("/contacts", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const docRef = await db.collection("contacts").add({
      name,
      email,
      message,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    res
      .status(200)
      .json({ id: docRef.id, message: "Contact saved successfully" });
  } catch (error) {
    console.error("Error adding contact:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
