import axios from 'axios';
const baseUrl = `/api/notes`;

let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const getAll = () => {
  const request = axios.get(baseUrl);
  return request
    .then((response) => response.data)
    .catch((err) => console.log('fail', err));
};

const create = async (newObj) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(baseUrl, newObj, config);
  return response.data;
};

const update = (id, newObj) => {
  const request = axios.put(`${baseUrl}/${id}`, newObj);
  return request
    .then((response) => response.data)
    .catch((err) => console.log('fail', err));
};

export default {
  getAll,
  create,
  update,
  setToken,
};
