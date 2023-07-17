import users from '../data/members.json';

export function getUserData(username) {
  const user = users.find(user => user.username === username);
  return user;
}
