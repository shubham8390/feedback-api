const express = require('express');
const cors = require('cors');
const feedbackRoutes = require('./routes/feedbackRoutes');
const apiAuth = require('./middleware/auth');

const app = express();

app.use(cors());
app.use(express.json());

// Protect all /feedbacks routes
app.use('/feedbacks', apiAuth, feedbackRoutes);

module.exports = app;
    