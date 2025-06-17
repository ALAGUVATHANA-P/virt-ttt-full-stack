"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Define the userScores object
const userScores = {
    alice: 82,
    bob: 1250,
    charlie: 7,
    diana: 999,
    eve: 5000
};
// Manual function to right-pad a string
function padRight(str, length, char = ' ') {
    while (str.length < length) {
        str += char;
    }
    return str;
}
// Manual function to left-pad a string
function padLeft(str, length, char = '0') {
    while (str.length < length) {
        str = char + str;
    }
    return str;
}
// Async function to simulate fetching data and displaying leaderboard
function displayLeaderboard() {
    return __awaiter(this, void 0, void 0, function* () {
        // Simulate 2-second delay
        yield new Promise(resolve => setTimeout(resolve, 2000));
        console.log("Leaderboard:\n");
        for (const username in userScores) {
            if (Object.prototype.hasOwnProperty.call(userScores, username)) {
                const score = userScores[username];
                const paddedUsername = padRight(username, 15);
                const paddedScore = padLeft(score.toString(), 5);
                console.log(`${paddedUsername} ${paddedScore}`);
            }
        }
    });
}
// Call the function
displayLeaderboard();
