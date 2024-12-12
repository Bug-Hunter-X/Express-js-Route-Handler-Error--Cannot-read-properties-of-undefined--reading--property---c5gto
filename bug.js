const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database operations to fetch user data using userId ...
  if (!userData) {
    res.status(404).send('User not found'); // Correct: Sends 404
  }
  // ... handle other cases ...
});