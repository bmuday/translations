const express = require("express");
const cors = require("cors");
const PORT = 8080;

const app = express();
app.use(express.json());
app.use(cors());

const text = {
  en: "Little fox sleep. \nDream fast in your slumber.",
  de: "Kleiner Fuchs schlafen. \nTraüme schnell in deinem Schlaf.",
};

app.get("/text", (req, res) => {
  const locale = req.header("Accept-Language".substr(0, 2));

  res.send({ text: text[locale] });
});

app.post("/like", (req, res) => {
  res.send({ message: "Thank You" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
