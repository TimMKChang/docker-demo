const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World! 44444444444444');
})

app.get('/greeting', (req, res) => {
  res.json({ message: 'Good morning!' });
})

app.listen(port, () => {
  console.log(`App is now running on localhost:${port}`);
});
