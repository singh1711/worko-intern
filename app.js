const express = require('express');
const connectDB = require('./config/dbConfig');
const userRoutes = require('./routes/userRoutes');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', userRoutes);

connectDB();

const server= app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = server;