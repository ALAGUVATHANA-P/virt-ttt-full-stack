"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _User_password;
// User.ts
class User {
    constructor(username, password) {
        _User_password.set(this, void 0);
        this.username = username;
        __classPrivateFieldSet(this, _User_password, password, "f");
    }
    setPassword(oldPassword, newPassword) {
        if (__classPrivateFieldGet(this, _User_password, "f") === oldPassword) {
            __classPrivateFieldSet(this, _User_password, newPassword, "f");
            return true;
        }
        return false;
    }
    validatePassword(password) {
        return __classPrivateFieldGet(this, _User_password, "f") === password;
    }
    getUsername() {
        return this.username;
    }
}
_User_password = new WeakMap();
// Admin.ts
class Admin extends User {
    constructor(username, password) {
        super(username, password);
    }
    resetUserPassword(user, newPassword) {
        // Bypassing private password validation — only Admins can do this
        // Use of "as any" to access private field — use responsibly
        user['#password'] = newPassword;
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
