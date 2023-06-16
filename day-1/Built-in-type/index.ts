// builtin types : number , boolean , string , void , null , undefined
let userID: number;
let userName: string;
let isActive: boolean;
userID = 121;
userName = 'meraj';
isActive = true;

console.log(userID);

console.log(
  `my id is ${userID}, name is ${userName}, Am i Activated ${isActive}`
);

function display(): void {
  console.log('Hello I am a void function');
}

display();
