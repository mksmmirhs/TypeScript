// number type enum
enum RequestType {
  data1 = 1,
  data2,
  data3,
}

console.log(RequestType);
//string type
enum RequestType2 {
  data1 = 'READ',
  data2 = 'delete',
  data3 = 'Write',
}
console.log(RequestType2);
console.log(RequestType2.data2);

//heterogeneous
enum RequestType3 {
  data1 = 'READ',
  data2 = 2,
  data3 = 'Write',
}

export {};
