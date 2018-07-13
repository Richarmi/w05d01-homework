

const express = require('express');

const app = express();

const superheroes = [
  {name: "batman", powers: "gadgets"},
  { name: "superman", powers: ['flight', 'invulnerability', 'x-ray vision']}, {name: "hulk", powers: "super-human strength"}];

app.get('/superheroes/:index', (req, res) =>
{
    res.send(superheroes[req.params.index]);
});



// fruits
const fruits = ['apple', 'banana', 'pear'];

app.get('/fruits', (req, res) => {
  res.send(fruits);
});

app.get('/fruits/:index', (req, res) =>
{
  res.send(fruits[req.params.index]);
});



app.listen(3000, () =>
{
  console.log('Here to save the day...')
});
