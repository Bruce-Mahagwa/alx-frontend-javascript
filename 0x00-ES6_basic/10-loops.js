export default function appendToEachArrayValue(array, appendString) {
let copy = [...array];
	array = [];
for (let idx of copy) {
    let value = appendString + idx;
	array.push(value);
 }

  return array;
}
