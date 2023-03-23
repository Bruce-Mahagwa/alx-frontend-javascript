import ClassRoom from "./0-classroom.js";
export default function initializeRooms() {
  let obj = new ClassRoom(19);
  let obj2 = new ClassRoom(20);
  let obj3 = new ClassRoom(34);
  return [obj, obj2, obj3];
}
