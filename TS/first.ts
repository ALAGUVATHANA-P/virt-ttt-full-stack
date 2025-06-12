// User's name is stored in a variable
let userName: string = "Alagu";

// Define the profile using an object
let userProfile = {
    name: userName,
    role: "viewer"
};

console.log("Before block:");
console.log("Name:", userProfile.name); // "Alagu"
console.log("Role:", userProfile.role); // "viewer"

// Modify role inside a block
{
    userProfile.role = "admin"; // Updating the role
    console.log("Inside block:");
    console.log("Name:", userProfile.name); // "Alagu" (unchanged)
    console.log("Role:", userProfile.role); // "admin" (updated)
}

// After the block
console.log("After block:");
console.log("Name:", userProfile.name); // "Alagu"
console.log("Role:", userProfile.role); // "admin"