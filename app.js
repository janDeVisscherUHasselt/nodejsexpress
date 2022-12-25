'use strict';

const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000

const pizzas = ["margherita", "pepperoni"]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/pizzas', (req, res) => {
  res.send(pizzas)
})

app.get('/pizzas/:pizza', (req, res) => {
  const pizza = req.params.pizza
  res.send("Do we have " + pizza + ": " + pizzas.includes(pizza))
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/addpizza',(req,res) => {
  pizzas.push(req.body.name)
  res.status(200).send(pizzas)
  });
 

app.use((req, res, next) => {
  res.status(404).send("<h1>404 " + req.url + " not found</h1>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})