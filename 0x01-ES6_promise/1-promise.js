function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success === true) {
      resolve({status: 200, body: "Success"})
    }
    else {
      reject({Error: "The Fake API is not working currently"})
  }
})
}
export default getFullResponseFromAPI
