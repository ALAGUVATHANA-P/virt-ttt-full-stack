// Define the user objects
const user1 = { name: "Madam", age: 30, city: "Chennai" };
const user2 = { age: 31, profession: "Developer", country: "India" };

// Merge the objects, with user2 properties overriding user1
const mergedUser = { ...user1, ...user2 };

// Destructure name and age, and collect the rest into another object
const { name: userName, age, ...rest } = mergedUser;

// Print the extracted values
console.log("Name:", userName);
console.log("Age:", age);
console.log("Other Details:", rest);