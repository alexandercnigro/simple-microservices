const express=require('express');
const prices=require('./prices');
const axios = require('axios');

const app = express();
app.use(express.json());
const port = 3001

app.post('/price', (req, res) => {
  axios.post(`${process.env.TAX_SERVICE_URL}`, {
    price: prices[req.body.fruit],
  })
  .then(function (response) {
    res.send("Price from Cost service with calculated tax from Tax service: " + (response.data + prices[req.body.fruit]))
  })
  .catch(function (error) {
    console.log(error);
  });
})
  app.listen(port, () => console.log(`Cost service listening on port ${port}!`))