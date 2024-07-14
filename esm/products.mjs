export default (request) => ({
  list: (params) => request('/products', 'GET', params),
  find: (params) => request(`/products/${params.id}`, 'GET', params),
  create: (data) => request('/products', 'POST', data),
  update: (data) => request(`/products/${data.id}`, 'PUT', data),
  delete: (params) => request(`/products/${params.id}`, 'DELETE', params),
});
