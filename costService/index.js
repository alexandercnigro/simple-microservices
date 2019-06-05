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
    console.log(`${process.env.TAX_SERVICE_URL}`)
    res.send("Base Price from Cost service: $" + prices[req.body.fruit]
    + "\nTax from Tax service: $" + response.data 
    + "\nTotal Price: $" + (response.data + prices[req.body.fruit]))
  })
  .catch(function (error) {
    console.log(error);
  });
})
  app.listen(port, () => console.log(`Cost service listening on port ${port}!`))