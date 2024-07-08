const {expect} = require('expect')
const {Given, When, Then} = require('@cucumber/cucumber');

const {Teacher} = require('../../../src/teacherClass');

Given('I am a teacher with {int} students in the class', function (numStudents) {
    // Write code here that turns the phrase above into concrete actions
    const attendanceData = [
        { date: '2024-07-01', student_id: 1, status: 'present' },
        { date: '2024-07-02', student_id: 1, status: 'absent' },
        { date: '2024-07-01', student_id: 2, status: 'present' },
        { date: '2024-07-02', student_id: 2, status: 'present' },
        { date: '2024-07-01', student_id: 3, status: 'absent' },
      ];
    
    this.teacher = new Teacher(attendanceData);
  });

Given('There is no attendance data for the class', function () {
    // Write code here that turns the phrase above into concrete actions
    const attendanceData = [];
    this.teacher = new Teacher(attendanceData);
});

Given('Some students have missing data', function () {
    // Write code here that turns the phrase above into concrete actions
    const attendanceData = [
        { date: '2024-07-01', student_id: 1, status: 'present' },
        { date: '2024-07-02', student_id: 1, status: 'absent' },
        { date: '2024-07-01', student_id: 2, status: 'present' },
        { date: '2024-07-02', student_id: 2, status: 'present' },
        { date: '2024-07-01', student_id: 3, status: 'absent' },
        { date: '2024-07-02', student_id: 4, status: 'present' },
      ];
    
    this.teacher = new Teacher(attendanceData);
});

When('I view the attendance overview', function () {
// Write code here that turns the phrase above into concrete actions
    this.overview = this.teacher.classAttendanceOverview();
});

Then('I should see the attendance rates for the entire class', function () {
    // Write code here that turns the phrase above into concrete actions
    expect(this.overview).toEqual({
        '2024-07-01': { present: 2, absent: 1 },
        '2024-07-02': { present: 1, absent: 1 },
      });
  });

Then('I should see a message indicating that there is no attendance data', function () {
    expect(this.overview).toEqual({});
});