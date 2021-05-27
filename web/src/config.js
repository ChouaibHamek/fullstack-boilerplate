/* eslint-disable import/prefer-default-export */
export const TRACKER_ID = 'UA-66984210-5';

export const DOMAIN_URL = (process.env.NODE_ENV === 'production') ?
  `${window.location.origin}`
  : 'http://localhost:5000';
