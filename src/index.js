import express from "express";

const app = express();

app.listen(process.env.PORT, () => {
  console.log("Express server is running");
});
