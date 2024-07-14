export default (request) => ({
  list: (params) => request('/customers', 'GET', params),
  get: (id, params) => request(`/customers/${id}`, 'GET', params),
  create: (data) => request('/customers', 'POST', data),
  update: (id, data) => request(`/customers/${id}`, 'POST', data),
  delete: (id, params) => request(`/customers/${id}`, 'DELETE', params),
});
