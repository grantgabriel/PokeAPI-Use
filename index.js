const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

// Ambil data pokemon
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
    message: 'Pokemon berhasil dimasukkan',
    pokemon: newPokemon
  });
});

// Put endpoint
app.put('/pokemon/:id', (req, res) => {
  res.json({ message: 'Ini operasi PUT' });
});

// Patch endpoint
app.patch('/pokemon/:id', (req, res) => {
  res.json({ message: 'Ini operasi PATCH' });
});

// Delete endpoint
app.delete('/pokemon/:id', (req, res) => {
  res.json({ message: 'Ini operasi DELETE' });
});

app.head('/pokemon/:id', (req, res) => {
  res.status(200).json({ message: 'Ini operasi HEAD' });
});


// Options endpoint
app.options('/pokemon/:id', (req, res) => {
  res.json({ message: 'Ini operasi OPTIONS' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
