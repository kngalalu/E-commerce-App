const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pool = require('./db');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test route
app.get('/', (req, res) => {
  res.send('E-commerce API is running');
});

// Routes
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});