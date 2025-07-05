const express = require('express');
const cors = require('cors');
const feedbackRoutes = require('./routes/feedbackRoutes');
const apiAuth = require('./middleware/auth');

const app = express();


const allowedOrigins = [
    'https://feedback-viewer.netlify.app',
    'http://localhost:3000'
  ];

  const corsOptions = {
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('CORS policy does not allow access from this origin.'));
      }
    },
    credentials: true, // Allow cookies or auth headers
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'] 
  };

app.use(cors(corsOptions));
app.use(express.json());

// Protect all /feedbacks routes
app.use('/feedbacks', apiAuth, feedbackRoutes);

module.exports = app;
    