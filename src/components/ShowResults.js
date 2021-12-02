import ApiManager from "../api/api-manager";

export default (async function showResults(values, id) {
  ApiManager.createAnnouncement(id, values);
});
