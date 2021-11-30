import ApiManager from "../api/api-manager";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function showResults(values) {
  await sleep(500); // simulate server latency
  console.log(values);
  window.alert(`You submitted:\n\n${JSON.stringify(values, 1, 2)}`);
  ApiManager.createAnnouncement("nykolas", values);
});
