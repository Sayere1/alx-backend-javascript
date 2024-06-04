/**
 * @param {{ id: Number, firstName: String, location: String }[]}.
 * @returns: an empty array if argument is not an array.
 */
export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }
  return [];
}
