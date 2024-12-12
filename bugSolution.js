const express = require('express');
const app = express();
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  let userData = await fetchUserData(userId);
  if (!userData) {
    res.status(404).send('User not found');
    return;
  }
  res.send(userData);
});

async function fetchUserData(userId) {
  // Simulate fetching user data from a database (replace with your actual database interaction)
  const users = {
    '1': { id: 1, name: 'John Doe' },
    '2': { id: 2, name: 'Jane Doe' }
  };

  return users[userId];
}
