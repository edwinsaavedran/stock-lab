const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

const STOCK_FILE = '/app/data/stock.json';

function readStock() {
  const data = fs.readFileSync(STOCK_FILE);
  return JSON.parse(data).stock;
}

function writeStock(value) {
  fs.writeFileSync(STOCK_FILE, JSON.stringify({ stock: value }));
}

app.get('/stock', (req, res) => {
  const stock = readStock();
  res.json({ stock });
});

app.post('/decrease', (req, res) => {
  const { client, amount } = req.body;
  const current = readStock();
  console.log(`[${client}] Stock actual: ${current}`);
  const newStock = current - amount;
  console.log(`[${client}] Nuevo stock: ${newStock}`);
  writeStock(newStock);
  res.json({ newStock });
});

app.listen(3000, () => console.log(" Stock Server corriendo en puerto 3000"));