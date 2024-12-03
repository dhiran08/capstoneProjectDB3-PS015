import API_ENDPOINT from '../global/api-endpoint';

class ExplorenusantaradbSource {
  static async destinationList() {
    const response = await fetch(API_ENDPOINT.DESTINATION_LIST);
    const responseJson = await response.json();
    return responseJson.data.destinations;
  }

  static async detailDestination(id) {
    const response = await fetch(API_ENDPOINT.DESTINATION_DETAIL(id));
    const responseJson = await response.json();
    return responseJson.data.destination;
  }

  static async culinaryList() {
    const response = await fetch(API_ENDPOINT.CULINARY_LIST);
    const responseJson = await response.json();
    return responseJson.data.localpreneurs;
  }

  static async detailCulinary(id) {
    const response = await fetch(API_ENDPOINT.CULINARY_DETAIL(id));
    const responseJson = await response.json();
    return responseJson.data.localpreneur;
  }

  static async eventList() {
    const response = await fetch(API_ENDPOINT.EVENT_LIST);
    const responseJson = await response.json();
    return responseJson.data.events;
  }

  static async detailEvent(id) {
    const response = await fetch(API_ENDPOINT.EVENT_DETAIL(id));
    const responseJson = await response.json();
    return responseJson.data.event;
  }
}

module.exports = ExplorenusantaradbSource;
// pm2 start npm --name "explore-nusantara-api" -- run "start" 