/* Implement a class named Holberton Course using constructor attributes. */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /* Gets course name. */
  get name() {
    return this._name;
  }

  /* Set course name. */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Gets course duration. */
  get length() {
    return this._length;
  }

  /* Set duration in months. */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /* get Student name. */
  get students() {
    return this._students;
  }

  /* Set student in the course. */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
