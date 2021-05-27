// # ENV VARIABLES IMPORTS
exports.domain = process.env.NODE_ENV === 'production' ? process.env.API_BASE_URL : 'http://localhost:8080/';
exports.appURL = process.env.APP_URL;

// # CORS configuration
const corsWhiteList = ['http://localhost:8080'];
exports.corsOptions = {
  origin: corsWhiteList,
};