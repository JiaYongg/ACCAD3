const { Teacher, AttendanceError } = require('../../src/teacherClass');

describe('Teacher Class Integration Tests', () => {
  let teacher;

  beforeEach(() => {
    const attendanceData = [
      { date: '2024-07-01', student_id: 1, status: 'present' },
      { date: '2024-07-01', student_id: 2, status: 'present' },
      { date: '2024-07-01', student_id: 3, status: 'present' },
      { date: '2024-07-01', student_id: 4, status: 'absent' },
      { date: '2024-07-01', student_id: 5, status: 'present' },
      { date: '2024-07-01', student_id: 6, status: 'absent' },
      { date: '2024-07-01', student_id: 7, status: 'present' },
      { date: '2024-07-01', student_id: 8, status: 'present' },
      { date: '2024-07-01', student_id: 9, status: 'present' },
      { date: '2024-07-01', student_id: 10, status: 'present' },
      // Additional dates can be added as needed
    ];
    teacher = new Teacher(attendanceData);
  });

  it('should generate an attendance report for the given date range', () => {
    const startDate = '2024-07-01';
    const endDate = '2024-11-20';

    const report = teacher.generateAttendanceReport(startDate, endDate);

    expect(report).toHaveLength(10);
    expect(report.filter(record => record.status === 'present')).toHaveLength(8);
  });

  it('should provide a summary of attendance for a specific student', () => {
    const studentId = 1;

    const summary = teacher.studentAttendanceSummary(studentId);

    expect(summary).toHaveLength(1);
    expect(summary[0].status).toBe('present');
  });

  it('should provide a class attendance overview', () => {
    const overview = teacher.classAttendanceOverview();

    expect(overview).toEqual({
      '2024-07-01': { present: 8, absent: 2 },
    });
  });

  it('should analyze attendance trends over time', () => {
    const trends = teacher.attendanceTrendsAnalysis();

    expect(trends).toEqual({
      "July": { present: 8, absent: 2 }, // July is month 6 in JavaScript's Date object
    });
  });

  it('should share the attendance report', () => {
    const startDate = '2024-07-01';
    const endDate = '2024-11-20';
    const recipient = 'Parents';

    console.log = jest.fn();
    teacher.shareAttendanceReport(startDate, endDate, recipient);

    expect(console.log).toHaveBeenCalledWith(
      `Attendance Report for ${recipient}:`,
      expect.any(Array)
    );
  });
});
