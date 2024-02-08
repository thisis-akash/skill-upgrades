const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from node server');
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
