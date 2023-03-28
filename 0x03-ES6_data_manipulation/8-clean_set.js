export default function cleanSet(set, startstring) {
  if (startstring === '') {
    return '';
  }
  let joinedstring = '';
  for (const i of set) {
    if (i.startsWith(startstring)) {
      joinedstring += i.slice(startstring.length);
      joinedstring += '-';
    }
  }
  joinedstring = joinedstring.slice(0, joinedstring.length - 1);
  return joinedstring;
}
