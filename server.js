// server.js
const express = require("express");
const app = express();

app.get("/pricing/:productId", (req, res) => {
  const productId = req.params.productId;
  const pricing = [
    { productId: "1", dealer: "Dealer A", price: 100 },
    { productId: "1", dealer: "Dealer B", price: 120 },
    { productId: "2", dealer: "Dealer A", price: 150 },
  ];
  res.json(pricing.filter((p) => p.productId === productId));
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running");
});
