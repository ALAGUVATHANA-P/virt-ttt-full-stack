type User = {
  name: string;
  roles: string[];
};

const privilegedRoles = ["admin", "moderator", "superuser"];

function checkAccessAndPowerScore(user: User): void {
  // Check if user has at least one privileged role
  const hasAccess = user.roles.some(role => privilegedRoles.includes(role));

  // Calculate power score: 2 raised to the number of roles
  const powerScore = 2 ** user.roles.length;

  // Print access message
  if (hasAccess) {
    console.log(`Access Granted. Power Score: ${powerScore}`);
  } else {
    console.log(`Access Denied. Power Score: ${powerScore}`);
  }
}

// Example users
const user1: User = {
  name: "Alice",
  roles: ["user", "admin"]
};

const user2: User = {
  name: "Bob",
  roles: ["viewer", "editor"]
};

// Test the function
checkAccessAndPowerScore(user1); // Output: Access Granted. Power Score: 4
checkAccessAndPowerScore(user2); // Output: Access Denied. Power Score: 4