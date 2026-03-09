import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello, world!",
  });
});

app.listen(8080, (err) => {
  if (err) {
    throw err;
  }

  console.log("Listening on port 8080");
});
