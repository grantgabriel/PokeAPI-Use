const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

// Ambik data pokemon
app.get('/pokemon/:id', async (req, res) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from PokeAPI' });
  }
});

// Post pokemon
app.post('/pokemon', (req, res) => {
  const newPokemon = req.body;
  res.json({
    message: 'Pokemon has been inserted',
    pokemon: newPokemon
  });
});

app.put('/pokemon/:id', (req, res) => {
  res.json({ message: 'This is PUT operation' });
});

app.patch('/pokemon/:id', (req, res) => {
  res.json({ message: 'This is PATCH operation' });
});

app.delete('/pokemon/:id', (req, res) => {
  res.json({ message: 'This is DELETE operation' });
});

app.head('/pokemon/:id', (req, res) => {
  res.sendStatus(200);
});

app.options('/pokemon/:id', (req, res) => {
  res.set('Allow', 'GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS').sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
