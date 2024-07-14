export default (request) => ({
  list: (params) => request('/orders', 'GET', params),
  get: (id, params) => request(`/orders/${id}`, 'GET', params),
  create: (data) => request('/orders', 'POST', data),
  update: (id, data) => request(`/orders/${id}`, 'POST', data),
  delete: (id, params) => request(`/orders/${id}`, 'DELETE', params),
});
