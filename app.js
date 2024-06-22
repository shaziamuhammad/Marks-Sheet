const totalMarks = 200;

const students = [
  {
    name: "Ali",
    scienceMarks: 90,
    englishMarks: 70,
  },
  {
    name: "Huzaifa",
    scienceMarks: 10,
    englishMarks: 40,
  },
  {
    name: "Asim",
    scienceMarks: 40,
    englishMarks: 60,
  },
];

function calculateMarks(student) {
  const total = student.scienceMarks + student.englishMarks;
  const percentage = (total / totalMarks) * 100;
  const status = percentage >= 40 ? "PASSED" : "FAILED";

  return { total, percentage, status };
}

const app = document.getElementById("app");

students.forEach((student) => {
  const result = calculateMarks(student);

  const studentDiv = document.createElement("div");
  studentDiv.classList.add("student");

  studentDiv.innerHTML = `
    <h2>Name: ${student.name}</h2>
    <p>Science Marks: ${student.scienceMarks}</p>
    <p>English Marks: ${student.englishMarks}</p>
    <p>Total Marks: ${result.total}</p>
    <p>Percentage: ${result.percentage.toFixed(2)}%</p>
    <p class="${result.status === 'PASSED' ? 'passed' : 'failed'}">${result.status}</p>
  `;

  app.appendChild(studentDiv);
});
