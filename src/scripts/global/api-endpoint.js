import CONFIG from './config';

const API_ENDPOINT = {
  DESTINATION_LIST: `${CONFIG.BASE_URL}/destinations`,
  DESTINATION_DETAIL: (id) => `${CONFIG.BASE_URL}/destinations/${id}`,
  CULINARY_LIST: `${CONFIG.BASE_URL}/localpreneurs`,
  CULINARY_DETAIL: (id) => `${CONFIG.BASE_URL}/localpreneurs/${id}`,
  EVENT_LIST: `${CONFIG.BASE_URL}/events`,
  EVENT_DETAIL: (id) => `${CONFIG.BASE_URL}/events/${id}`
};

module.exports = API_ENDPOINT;