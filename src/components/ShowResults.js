import ApiManager from "../api/api-manager";

export default (async function showResults(values) {
  ApiManager.createAnnouncement("nykolas", values);
  window.alert(`You submitted:\n\n${JSON.stringify(values, 1, 2)}`);
});
