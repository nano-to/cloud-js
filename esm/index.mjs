import fetch from 'node-fetch';
import orders from './orders.mjs';
import products from './products.mjs';
import wallets from './wallets.mjs';
import checkouts from './checkouts.mjs';

function Nano(apiKey, baseURL) {
  const authorization = `Bearer ${apiKey}`;
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
    orders: orders(request),
    products: products(request),
    wallets: wallets(request),
  };
}

export default Nano;
