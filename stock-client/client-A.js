const axios = require('axios');

(async () => {
  const stock = await axios.get('http://stock-server:3000/stock');
  const initial = stock.data.stock;
  console.log("[CLIENTE A] Stock leído:", initial);
  const result = await axios.post('http://stock-server:3000/decrease', {
    client: "A",
    amount: 3
  });
  console.log("[CLIENTE A] Stock después de decrementar:", result.data.newStock);
})();