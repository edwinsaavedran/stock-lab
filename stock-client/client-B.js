const axios = require('axios');

(async () => {
  const stock = await axios.get('http://stock-server:3000/stock');
  const initial = stock.data.stock;
  console.log("[CLIENTE B] Stock leído:", initial);
  const result = await axios.post('http://stock-server:3000/decrease', {
    client: "B",
    amount: 2
  });
  console.log("[CLIENTE B] Stock después de decrementar:", result.data.newStock);
})();