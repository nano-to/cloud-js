const fetch = require('node-fetch');
const orders = require('./orders');
const products = require('./products');
const wallets = require('./wallets');
const checkouts = require('./checkouts');
const customers = require('./customers');
const discounts = require('./discounts');

function Nano(apiKey, baseURL) {

  const authorization = `${apiKey}`;
  const baseUrl = baseURL || 'https://cloud.nano.to/v1';

  const getHeaders = () => ({
    'Authorization': authorization,
    'Content-Type': 'application/json',
  });

  const request = async (endpoint, method, data) => {
    try {
      const url = `${baseUrl}${endpoint}`;
      const options = {
        method: method,
        headers: getHeaders(),
      };

      if (method !== 'GET') {
        options.body = JSON.stringify(data);
      }

      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Expected JSON response from server');
      }

      return await response.json();
    } catch (error) {
      throw error; 
    }
  };

  return {
    checkouts: checkouts(request),
    products: products(request),
    orders: orders(request),
    wallets: wallets(request),
    customers: customers(request),
    discounts: discounts(request),
  };
}

module.exports = Nano;
