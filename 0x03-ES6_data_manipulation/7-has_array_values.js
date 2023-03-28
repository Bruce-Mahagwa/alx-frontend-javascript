export default function hasValuesFromArray(set, arr) {
  let exist = true;
  for (let i = 0; i < arr.length; i += 1) {
    if (set.has(arr[i]) === false) {
      exist = false;
    }
  }
  return exist;
}
