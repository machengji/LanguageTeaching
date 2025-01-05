// api/user.js
import axios from '@/utils/axios.js';

export function getUserinfo(userId) {
  return axios.get(`/api/getUserinfo/${userId}`);
}

export function saveUserinfo(planData) {
  return axios.post('/api/saveUserinfo/save', planData);
}

export function getPlan(message) {
  return axios.post('/api/ask', message);
}
