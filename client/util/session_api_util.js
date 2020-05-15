const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/user',
    data: { user }
  })
);

const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);

const logut = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);