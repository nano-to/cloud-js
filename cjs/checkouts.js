module.exports = (request) => ({
  list: (params) => request('/checkouts', 'GET', params),
  find: (params) => request(`/checkouts/${params.id}`, 'GET', params),
  create: (data) => request('/checkouts', 'POST', data),
  update: (data) => request(`/checkouts/${data.id}`, 'PUT', data),
  confirm: (id, params) => request(`/checkouts/confirm/${id}`, 'GET', params),
});
