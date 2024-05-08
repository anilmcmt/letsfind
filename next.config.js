const { join } = require('path');
const { config } = require('dotenv');

const loadEnvConfig = () => {
  const env = process.env.NODE_ENV || 'development';
  const envFilePath = join(__dirname, 'env', `.env.${env}`);
  config({ path: envFilePath });
};

loadEnvConfig();

module.exports = {
  // ...
  env: {
    // Remove the NODE_ENV key from here
    API_URL: process.env.API_URL,
    // Add other environment variables here
  },
  // ...
};