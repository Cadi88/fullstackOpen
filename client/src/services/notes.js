import axios from 'axios';
const baseUrl = `/api/notes`;

const getAll = () => {
  const request = axios.get(baseUrl);
  return request
    .then((response) => response.data)
    .catch((err) => console.log('fail', err));
};

const create = (newObj) => {
  const request = axios.post(baseUrl, newObj);
  return request
    .then((response) => response.data)
    .catch((err) => console.log('fail', err));
};

const update = (id, newObj) => {
  const request = axios.put(`${baseUrl}/${id}`, newObj);
  return request
    .then((response) => response.data)
    .catch((err) => console.log('fail', err));
};

export default {
  getAll: getAll,
  create: create,
  update: update,
};
