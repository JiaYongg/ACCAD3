const {expect} = require('expect')
const {Given, When, Then} = require('@cucumber/cucumber');

const {Teacher} = require('../../../src/teacherClass');

Given('I am teacher with {int} students in the class', function (numStudents) {
    const attendanceData = [
        { date: '2024-07-01', student_id: 1, status: 'present' },
        { date: '2024-07-02', student_id: 1, status: 'absent' },
        { date: '2024-07-01', student_id: 2, status: 'present' },
        { date: '2024-07-02', student_id: 2, status: 'present' },
        { date: '2024-07-01', student_id: 3, status: 'absent' },
    ];
    this.teacher = new Teacher(attendanceData);
});

When('I view the attendance trends', function () {
    this.trends = this.teacher.attendanceTrendsAnalysis();
});

Then('I should see a graph of attendance rates over time', function () {
    expect(this.trends).toEqual({
        'July': { present: 3, absent: 2 }, // Corrected expected values
    });
});