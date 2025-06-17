"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// Define the user objects
const user1 = { name: "Madam", age: 30, city: "Chennai" };
const user2 = { age: 31, profession: "Developer", country: "India" };
// Merge the objects, with user2 properties overriding user1
const mergedUser = Object.assign(Object.assign({}, user1), user2);
// Destructure name and age, and collect the rest into another object
const { name: userName, age } = mergedUser, rest = __rest(mergedUser, ["name", "age"]);
// Print the extracted values
console.log("Name:", userName);
console.log("Age:", age);
console.log("Other Details:", rest);
