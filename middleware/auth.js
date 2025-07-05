require('dotenv').config();

const API_KEY = process.env.API_KEY;
console.log(API_KEY)
module.exports = (req, res, next) => {
  const userApiKey = req.headers['x-api-key'];

  if (!userApiKey || userApiKey !== API_KEY) {
    return res.status(401).json({ error: 'Unauthorized: Invalid API Key' });
  }

  next(); // Authorized
};
