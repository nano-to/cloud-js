module.exports = (request) => ({
  list: (params) => request('/products', 'GET', params),
  get: (id, params) => request(`/products/${id}`, 'GET', params),
  create: (data) => request('/products', 'POST', data),
  update: (id, data) => request(`/products/${id}`, 'POST', data),
  delete: (id, params) => request(`/products/${id}`, 'DELETE', params),
});
