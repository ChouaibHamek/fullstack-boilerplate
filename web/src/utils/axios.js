import axiosDefault from 'axios';

import { DOMAIN_URL } from '../config';

const axios = axiosDefault.create({
  baseURL: DOMAIN_URL,
});

export default axios;
