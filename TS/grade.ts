type Student = {
  name: string;
  grades?: number[];
};

const students: Student[] = [
  { name: "Alagu", grades: [80, 90, 85] },
  { name: "mano" },
  { name: "madhu", grades: [60, 70] },
  { name: "saran", grades: [] },
];

const getStudentMessages = (students: Student[]): string[] =>
  students.map(student => {
    const grades = student.grades;
    if (grades?.length) {
      const average =
        grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
      return `Student ${student.name} has an average grade of ${average.toFixed(2)}`;
    } else {
      return `Student ${student.name} has no grades.`;
    }
  });

// Example usage
const messages = getStudentMessages(students);
messages.forEach(msg => console.log(msg));