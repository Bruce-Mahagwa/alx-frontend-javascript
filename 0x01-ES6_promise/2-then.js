function handleResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success === true) {
	    console.log("Got a response from the API")
      resolve({status: 200, body: "success"})
    }
    else {
	    console.log("Got a response from the API")
      reject(Error)
  }
})
}
export default handleResponseFromAPI
