const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('About Page');
})

app.get('/help', (req, res) => {
  res.send([
    {
      prop: 'value_1'
    }, {
      prop: 'value_2'
    }
  ])
})

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'cold has reduced',
    location: 'punjab (india)'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000!');
});