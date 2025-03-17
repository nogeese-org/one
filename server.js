const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// API Endpoint for authentication
app.post('/auth', (req, res) => {
  res.json({ message: "Authenticated successfully!" });
});

// API Endpoint for retrieving data
app.get('/getData', (req, res) => {
  res.json({ data: 'Some Nogeese One data' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
