/* Implement a func, func ret 3 class obj */
import ClassRoom from './0-classroom';

export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
