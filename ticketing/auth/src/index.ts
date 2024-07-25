import express from "express";
import { json } from "body-parser";

const app = express();
app.use(json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    data: [],
    message: "Auth Service is working fine.",
  });
});

app.get("/demo", (req, res) => {
  res.status(200).json({
    success: true,
    data: [],
    message: "Demo is working fine.",
  });
});
app.listen(3000, () => {
  console.log("(auth) Listening on port 3000");
});
