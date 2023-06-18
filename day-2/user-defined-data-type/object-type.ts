let user: Object[];
user = [];
let user1: { userName: string; id: number };
user1 = { userName: 'anis', id: 124 };
let user2: { userName: string; id: number };
user2 = { userName: 'hamla', id: 14 };
user.push(user1);
user.push(user2);

console.log(user);
export {};
for (let key in user) {
  console.log(user[key]['userName']);
}
