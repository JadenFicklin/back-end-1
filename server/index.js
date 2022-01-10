const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/users", (req, res) => {
  let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
  res.status(200).send(friends);
});

app.get("/api/foods", (req, res) => {
  let foods = ["food 1", "food 2", "food 3", "food 4", "food 5"];
  res.status(200).send(foods);
});

app.listen(4000, () => console.log("Server running on port 4000"));
