const { expect } = require("expect");
const { Given, When, Then } = require("@cucumber/cucumber");

const { Teacher } = require("../../../src/teacherClass");

Given("this teacher has a class with {int} students", function (students) {
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


When("the teacher views the attendance summary 2", function () {
  this.summary = this.teacher.studentAttendanceSummary(1);
});

Then("the teacher should be able to share the summary with parents or administrators", function () {
    expect(this.summary.length).toBe(1);
    expect(this.summary[0].student_id).toBe(1);
    expect(this.summary[0].status).toBe('absent');
    }
);