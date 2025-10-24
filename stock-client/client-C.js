const axios = require('axios');

(async () => {
  const stock = await axios.get('http://stock-server:3000/stock');
  const initial = stock.data.stock;
  console.log("[CLIENTE C] Stock leído:", initial);
  const result = await axios.post('http://stock-server:3000/decrease', {
    client: "C",
    amount: 8
  });
  console.log("[CLIENTE C] Stock después de decrementar:", result.data.newStock);
})();