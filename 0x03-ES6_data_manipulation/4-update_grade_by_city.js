export default function updateStudentGradeByCity(arr, city, grades) {
  const students = arr.filter((item) => item.location === city);
  const newarr = [];
  grades.map((item, ind) => {
    students.map((std) => {
      if (item.studentId === std.id) {
        newarr.push(std);
        newarr[ind].grade = item.grade;
      }
    });
  });
  let oddoneout;
  if (students.length > newarr.length) {
    oddoneout = [];
    students.map((item) => {
      if (!newarr.includes(item)) {
        oddoneout.push(item);
      }
    });

    oddoneout.map((item) => {
      newarr.push(item);
      newarr[newarr.length - 1].grade = 'N/A';
    });
  }
  return newarr;
}
