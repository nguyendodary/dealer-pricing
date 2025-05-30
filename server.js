const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/pricing/:productId", (req, res) => {
  const productId = req.params.productId;
  const pricing = [
    { productId: "1", dealer: "Dealer A", price: 100 },
    { productId: "1", dealer: "Dealer B", price: 120 },
    { productId: "2", dealer: "Dealer A", price: 150 },
  ];
  res.json(pricing.filter((p) => p.productId === productId));
});

app.get("/price/:dealer/:productId", (req, res) => {
  const { dealer, productId } = req.params;
  const pricing = [
    { productId: "1", dealer: "Dealer A", price: 100 },
    { productId: "1", dealer: "Dealer B", price: 120 },
    { productId: "2", dealer: "Dealer A", price: 150 },
  ];
  const price = pricing.find((p) => p.dealer === dealer && p.productId === productId);
  res.json({ message: price ? price.price : "Not found" });
});

app.get("/allprice/:productId", (req, res) => {
  const productId = req.params.productId;
  const pricing = [
    { productId: "1", dealer: "Dealer A", price: 100 },
    { productId: "1", dealer: "Dealer B", price: 120 },
    { productId: "2", dealer: "Dealer A", price: 150 },
  ];
  const prices = pricing
    .filter((p) => p.productId === productId)
    .map((p) => ({ key: p.dealer, value: p.price }));
  res.json({ prices });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running");
});
