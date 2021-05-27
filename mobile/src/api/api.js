/* Axios configuration file. Axios is an npm package that facilitates making HTTP requests */

import axios from 'axios';

export default axios.create({
    baseURL: "http://fun-dev.herokuapp.com/api/"
});
