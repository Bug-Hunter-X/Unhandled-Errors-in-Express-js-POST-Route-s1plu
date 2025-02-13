const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  try {
    const newUser = req.body;
    if (!newUser || !newUser.name || !newUser.email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    users.push(newUser);
    res.status(201).send(newUser);
  } catch (error) {
    console.error('Error processing POST request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ... other routes

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});