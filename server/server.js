const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para parsear JSON
app.use(express.json());

// Endpoints para consumir la API

app.get('/api/characters', async (req, res) => {
  try {
    const response = await axios.get('https://comicvine.gamespot.com/api/characters/', {
      params: {
        'format' : `json`,
        'limit': 15,
        'api_key': `585e3de405ec75d2614140a0c4a0bb0b0a19e019`
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching data' });
  }
});

app.get('/api/issues', async (req, res) => {
    try {
      const response = await axios.get('https://comicvine.gamespot.com/api/issues/', {
        params: {
          'format' : `json`,
          'limit': 15,
          'api_key': `585e3de405ec75d2614140a0c4a0bb0b0a19e019`
        }
      });
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching data' });
    }
  });

  app.get('/api/people', async (req, res) => {
    try {
      const response = await axios.get('https://comicvine.gamespot.com/api/people/', {
        params: {
          'format' : `json`,
          'limit': 15,
          'api_key': `585e3de405ec75d2614140a0c4a0bb0b0a19e019`
        }
      });
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching data' });
    }
  }); 

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));