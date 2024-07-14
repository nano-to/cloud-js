export default (request) => ({
  list: (params) => request('/orders', 'GET', params),
  find: (params) => request(`/orders/${params.id}`, 'GET', params),
  create: (data) => request('/orders', 'POST', data),
  update: (data) => request(`/orders/${data.id}`, 'PUT', data),
  delete: (params) => request(`/orders/${params.id}`, 'DELETE', params),
});
