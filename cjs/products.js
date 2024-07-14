module.exports = (request) => ({
  list: (params) => request('/products', 'GET', params),
  get: (id, params) => request(`/products/${id}`, 'GET', params),
  create: (data) => request('/products', 'POST', data),
  update: (data) => request(`/products/${data.id}`, 'PUT', data),
  delete: (params) => request(`/products/${params.id}`, 'DELETE', params),
});
