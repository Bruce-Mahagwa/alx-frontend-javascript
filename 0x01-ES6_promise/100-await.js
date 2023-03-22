import {uploadPhoto, createUser} from "./utils.js";

async function asyncUploadUser() {
  let obj = {
    photo: null,
    user: null
  };
  return Promise.all([uploadPhoto(), createUser()]).then((values) => {
    obj.photo = values[0];
    obj.user = values[1];
    return obj;
  }).catch((err) => {
    return obj;
  })
}
export default asyncUploadUser
