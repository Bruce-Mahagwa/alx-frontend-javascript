export default function getStudentIdsSum(arr) {
  return arr.map((item) => item.id).reduce((acc, curr) => acc + curr, 0);
}
