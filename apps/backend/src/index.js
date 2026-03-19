import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, this is the backend!");
});

app.listen(8080, (err) => {
  if (err) {
    throw err;
  }

  console.log("Listening on port 8080");
});
