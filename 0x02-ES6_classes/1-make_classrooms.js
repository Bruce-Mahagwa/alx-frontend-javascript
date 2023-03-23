import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const obj = new ClassRoom(19);
  const obj2 = new ClassRoom(20);
  const obj3 = new ClassRoom(34);
  return [obj, obj2, obj3];
}
