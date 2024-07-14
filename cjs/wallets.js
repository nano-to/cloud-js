module.exports = (request) => ({
  list: (params) => request('/wallets', 'GET', params),
  get: (id, params) => request(`/wallets/${id}`, 'GET', params),
  create: (data) => request('/wallets', 'POST', data),
  update: (id, data) => request(`/wallets/${id}`, 'POST', data),
  send: (data) => request('/wallets/send', 'POST', data),
  receive: (data) => request('/wallets/receive', 'POST', data),
  change_rep: (data) => request('/wallets/change_rep', 'POST', data),
  export: (params) => request('/wallets/export', 'GET', params),
});
