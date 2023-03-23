export default class HolbertonCourse {
  constructor(name, length, students) {
    try {
      if (typeof (name) === 'string') {
	   this._name = name;
      }
      if (typeof (length) === 'number') {
	    this._length = length;
	    }
      if (typeof (students) === 'object') {
	    this._students = students;
	   }
    } catch (e) {
      throw e;
	  }
  }

  set name(str) {
	  if (typeof (str) !== 'string') {
      throw new TypeError('Name must be a string');
	  }
    this._name = str;
  }

  set length(len) {
	  if (typeof (len) !== 'number') {
	  throw new TypeError('Length must be a number');
	  }
    this._length = len;
  }

  set students(stds) {
	  if (typeof (stds) !== 'object') {
	  throw new TypeError('Students must be an object');
	  }
    this._students = stds;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }
}
