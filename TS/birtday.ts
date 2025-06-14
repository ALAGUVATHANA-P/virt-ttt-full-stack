type Person = {
  name: string;
  birthdate: string; // Format: "YYYY-MM-DD"
};

const people: Person[] = [
  { name: "Alagu", birthdate: "1990-06-14" },
  { name: "Nithi", birthdate: "1985-12-25" },
  { name: "saran", birthdate: "2000-06-14" }, // Match today's date if today is June 14
];

const checkBirthdaysToday = (people: Person[]): string[] => {
  const today = new Date();
  const todayMonth = today.getMonth(); // 0-indexed
  const todayDate = today.getDate();

  const birthdayMessages = people
    .filter(person => {
      const birthDate = new Date(person.birthdate);
      return (
        birthDate.getMonth() === todayMonth &&
        birthDate.getDate() === todayDate
      );
    })
    .map(person => `Today is ${person.name}'s birthday!`);

  return birthdayMessages.length > 0
    ? birthdayMessages
    : ["No birthdays today."];
};

// Example usage
const messages = checkBirthdaysToday(people);
messages.forEach(msg => console.log(msg));