export default (request) => ({
  list: (params) => request('/discounts', 'GET', params),
  get: (id, params) => request(`/discounts/${id}`, 'GET', params),
  create: (data) => request('/discounts', 'POST', data),
  update: (id, data) => request(`/discounts/${id}`, 'POST', data),
  delete: (id, params) => request(`/discounts/${id}`, 'DELETE', params),
});
