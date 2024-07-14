module.exports = (request) => ({
  list: (params) => request('/wallets', 'GET', params),
  find: (params) => request(`/wallets/${params.id}`, 'GET', params),
  create: (data) => request('/wallets', 'POST', data),
  update: (data) => request(`/wallets/${data.id}`, 'PUT', data),
  send: (data) => request('/wallets/send', 'POST', data),
  receive: (data) => request('/wallets/receive', 'POST', data),
  change_rep: (data) => request('/wallets/change_rep', 'POST', data),
});
