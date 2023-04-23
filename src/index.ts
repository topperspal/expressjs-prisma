import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  console.log(process.env.NODE_ENV);

  res.send("Hello world");
});

app.listen(Number(port), "0.0.0.0", () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
