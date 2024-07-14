export default (request) => ({
  list: (params) => request('/checkouts', 'GET', params),
  get: (id, params) => request(`/checkouts/${id}`, 'GET', params),
  create: (data) => request('/checkouts', 'POST', data),
  update: (id, data) => request(`/checkouts/${id}`, 'POST', data),
  confirm: (id, params) => request(`/checkouts/confirm/${id}`, 'GET', params),
});
