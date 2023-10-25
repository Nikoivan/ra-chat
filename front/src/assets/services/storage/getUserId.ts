import { v4 } from "uuid";

export default function getUserId() {
  let userId: string | null = window.localStorage.getItem("userId");
  if (userId) {
    return userId;
  }
  userId = v4();
  window.localStorage.setItem("userId", userId);
  console.log(userId);
  return userId;
}
