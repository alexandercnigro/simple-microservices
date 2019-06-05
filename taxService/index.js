const express = require('express');
const getTax = require('./tax');

const app = express();
const port = 8080
app.use(express.json())
app.post('/', (req, res) => {
    res.send(`${getTax(req.body.price).tax}`)
})
app.listen(port, () => console.log(`Tax Service listening on port ${port}!`))