"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user;
user = [];
var user1;
user1 = { userName: 'anis', id: 124 };
var user2;
user2 = { userName: 'hamla', id: 14 };
user.push(user1);
user.push(user2);
console.log(user);
for (var key in user) {
    console.log(user[key]['userName']);
}
