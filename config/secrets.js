require('dotenv').config();

module.exports = {
  AUTH_URL: process.env.AUTH_URL,
  AUTH_SECRET: process.env.AUTH_SECRET,
  PORT: process.env.PORT || 5050,
  DB_ENV: process.env.DB_ENV || null,
};
