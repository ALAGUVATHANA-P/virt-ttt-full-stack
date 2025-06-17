// Define the userScores object
const userScores: Record<string, number> = {
  alice: 82,
  bob: 1250,
  charlie: 7,
  diana: 999,
  eve: 5000
};

// Manual function to right-pad a string
function padRight(str: string, length: number, char: string = ' '): string {
  while (str.length < length) {
    str += char;
  }
  return str;
}

// Manual function to left-pad a string
function padLeft(str: string, length: number, char: string = '0'): string {
  while (str.length < length) {
    str = char + str;
  }
  return str;
}

// Async function to simulate fetching data and displaying leaderboard
async function displayLeaderboard(): Promise<void> {
  // Simulate 2-second delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  console.log("Leaderboard:\n");

  for (const username in userScores) {
    if (Object.prototype.hasOwnProperty.call(userScores, username)) {
      const score = userScores[username];
      const paddedUsername = padRight(username, 15);
      const paddedScore = padLeft(score.toString(), 5);
      console.log(`${paddedUsername} ${paddedScore}`);
    }
  }
}

// Call the function
displayLeaderboard();
