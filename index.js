const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'))

app.get('',(req,res) => {
  res.send('hello express');
});

app.get('*', (req,res) => {
  res.sendFile('./public/404.html', { root: __dirname })
});

app.listen(PORT, () => {
  console.log(`server is up on port ${PORT}!`);
});