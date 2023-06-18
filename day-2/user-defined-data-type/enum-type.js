"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// number type enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["data1"] = 1] = "data1";
    RequestType[RequestType["data2"] = 2] = "data2";
    RequestType[RequestType["data3"] = 3] = "data3";
})(RequestType || (RequestType = {}));
console.log(RequestType);
//string type
var RequestType2;
(function (RequestType2) {
    RequestType2["data1"] = "READ";
    RequestType2["data2"] = "delete";
    RequestType2["data3"] = "Write";
})(RequestType2 || (RequestType2 = {}));
console.log(RequestType2);
console.log(RequestType2.data2);
//heterogeneous
var RequestType3;
(function (RequestType3) {
    RequestType3["data1"] = "READ";
    RequestType3[RequestType3["data2"] = 2] = "data2";
    RequestType3["data3"] = "Write";
})(RequestType3 || (RequestType3 = {}));
