// User.ts
class User {
  private username: string;
  #password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.#password = password;
  }

  setPassword(oldPassword: string, newPassword: string): boolean {
    if (this.#password === oldPassword) {
      this.#password = newPassword;
      return true;
    }
    return false;
  }

  validatePassword(password: string): boolean {
    return this.#password === password;
  }

  getUsername(): string {
    return this.username;
  }
}

// Admin.ts
class Admin extends User {
  constructor(username: string, password: string) {
    super(username, password);
  }

  resetUserPassword(user: User, newPassword: string): void {
    // Bypassing private password validation — only Admins can do this
    // Use of "as any" to access private field — use responsibly
    (user as any)['#password'] = newPassword;
  }
}

// --- Example Usage ---

const user1 = new User("john_doe", "password123");
console.log(user1.validatePassword("password123")); // true

const admin = new Admin("admin", "adminpass");
console.log(user1.setPassword("password123", "newpass")); // true

console.log(user1.validatePassword("newpass")); // true

// Admin resets user1's password
admin.resetUserPassword(user1, "adminReset123");
console.log(user1.validatePassword("adminReset123")); // true