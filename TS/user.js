"use strict";
class User {
    constructor(username) {
        this.username = username;
        this.password = "";
    }
    // Method to set password
    setPassword(newPassword) {
        if (newPassword.length < 6) {
            throw new Error("Password must be at least 6 characters long.");
        }
        this.password = newPassword;
    }
    // Method to validate password
    validatePassword(passwordAttempt) {
        return this.password === passwordAttempt;
    }
    getUsername() {
        return this.username;
    }
}
class AdminUser extends User {
    constructor(username) {
        super(username);
    }
    // Method to reset another user's password
    resetPassword(user, newPassword) {
        // Use a type assertion to bypass private restriction (not ideal in production)
        user.password = newPassword;
    }
}
// Example usage:
const user1 = new User("john_doe");
user1.setPassword("secret123");
console.log(user1.validatePassword("wrongpass")); // false
console.log(user1.validatePassword("secret123")); // true
const admin = new AdminUser("admin_user");
admin.resetPassword(user1, "newpass456");
console.log(user1.validatePassword("newpass456")); // true
