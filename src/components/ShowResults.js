import ApiManager from "../api/api-manager";

export default (async function showResults(values, id) {
  ApiManager.createAnnouncement(id, values);
  window.alert(`You submitted:\n\n${JSON.stringify(values, 1, 2)}`);
});
