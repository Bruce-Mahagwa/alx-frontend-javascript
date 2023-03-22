import {uploadPhoto, createUser} from "./utils.js"
function handleProfileSignup() {
	const arr = [];
  const promise =  Promise.all([uploadPhoto(), createUser()]);
	promise.then((values) => {
		values.map((item) => {
			arr.push(item.body)
			arr.push(item.firstName)
			arr.push(item.lastName)
		}
		)
		return arr;
	}).then((data) => {
		let str = ``
		data.forEach((val) => {
			if (val !== undefined) {
				val += " ";
				str += val;
			}
		})
		console.log(str.replace(/\s$/, "").length)
	}).catch((err) => {
	  console.log("Signup system offline")
	})
}
export default handleProfileSignup;
