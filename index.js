const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

const PORT = 4005;

app.post("/events", (req, res) => {
  const event = req.body;

  axios.post("http://localhost:4000/events", event).catch((e) => {
    console.log(e);
  });
  axios.post("http://localhost:4001/events", event).catch((e) => {
    console.log(e);
  });
  axios.post("http://localhost:4002/events", event).catch((e) => {
    console.log(e);
  });

  res.send({ status: "OK" });
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
