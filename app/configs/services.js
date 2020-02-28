import { get, post } from './networking';

// end point
export const endpoint = {
  getListUser: async page => get(`/users?page=${page}`),
  getUserById: async id => get(`/users/${id}`),
  login: async params => post('api/users/login', params),
  register: async params => post('api/users/register', params),
  quizById: async params => get('quiz/82142714-200a-45de-9f8c-9a1bc936fd3f', params)
};

export default { endpoint };
