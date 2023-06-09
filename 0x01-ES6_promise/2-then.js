function handleResponseFromAPI(promise) {
  promise.then(() => {
    console.log("Got a response from the API");
    return {status: 200, body: "success"};
  }).catch((err) => {
    console.log("Got a response from the API");
    return err;
  })
}
export default handleResponseFromAPI
