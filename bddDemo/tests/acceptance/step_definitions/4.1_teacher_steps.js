const { expect } = require("expect");
const { Given, When, Then } = require("@cucumber/cucumber");

const { Teacher } = require("../../../src/teacherClass");

Given("a teacher has a class with {int} students", function (students) {
  // Sample usage (for testing purposes)
  const attendanceData = [
    { date: "2024-07-03", student_id: 1, status: "absent" },
    { date: "2024-07-03", student_id: 2, status: "present" },
    { date: "2024-07-03", student_id: 3, status: "present" },
    { date: "2024-07-03", student_id: 4, status: "absent" },
    { date: "2024-07-03", student_id: 5, status: "present" },
    { date: "2024-07-03", student_id: 6, status: "absent" },
    { date: "2024-07-03", student_id: 7, status: "present" },
    { date: "2024-07-03", student_id: 8, status: "present" },
    { date: "2024-07-03", student_id: 9, status: "absent" },
    { date: "2024-07-03", student_id: 10, status: "present" },
  ];

  this.teacher = new Teacher(attendanceData);
});

When(
  "the teacher generates an attendance report for {string} to {string}",
  function (startDate, endDate) {
    this.report = this.teacher.generateAttendanceReport(startDate, endDate);
    console.log(this.report)
  }
);

Then(
  "the report should show that {int} students attended the class",
  function (int) {
    expect(this.report.length).toBe(int);
  }
);
