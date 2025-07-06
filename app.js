const express = require('express');
const cors = require('cors');
const feedbackRoutes = require('./routes/feedbackRoutes');
const apiAuth = require('./middleware/auth');

const app = express();


const corsOptions = {
    origin: function (origin, callback) {
      const allowedOrigins = [
        'https://feedback-viewer.netlify.app',
        'http://localhost:3000'
      ];
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('CORS policy does not allow access from this origin.'));
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-api-key']
  };
  

app.use(cors(corsOptions));
app.use(express.json());

// Protect all /feedbacks routes
app.use('/feedbacks', apiAuth, feedbackRoutes);

module.exports = app;
    