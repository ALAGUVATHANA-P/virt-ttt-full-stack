class User {
  private password: string;

  constructor(private username: string) {
    this.password = "";
  }

  // Method to set password
  public setPassword(newPassword: string): void {
    if (newPassword.length < 6) {
      throw new Error("Password must be at least 6 characters long.");
    }
    this.password = newPassword;
  }

  // Method to validate password
  public validatePassword(passwordAttempt: string): boolean {
    return this.password === passwordAttempt;
  }

  public getUsername(): string {
    return this.username;
  }
}

class AdminUser extends User {
  constructor(username: string) {
    super(username);
  }

  // Method to reset another user's password
  public resetPassword(user: User, newPassword: string): void {
    // Use a type assertion to bypass private restriction (not ideal in production)
    (user as any).password = newPassword;
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