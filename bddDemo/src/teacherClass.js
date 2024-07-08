class AttendanceError extends Error {
  constructor(message) {
    super(message);
    this.name = "AttendanceError";
  }

  toString() {
    return `${this.name}: ${this.message}`;
  }
}

class Teacher {
  static MAX_STUDENTS = 30;
  static TREND_THRESHOLD = 10;

  constructor(attendanceData) {
    if (attendanceData.length > Teacher.MAX_STUDENTS) {
      throw new AttendanceError("Too many students");
    }
    this.attendanceData = attendanceData; // Array of attendance records
  }

  // User Story 4.1: Generate Attendance Report
  generateAttendanceReport(startDate, endDate) {
    const report = this.attendanceData.filter((record) => {
      const date = new Date(record.date);
      return date >= new Date(startDate) && date <= new Date(endDate);
    });
    return report;
  }

  // User Story 4.2: Student Attendance Summary
  studentAttendanceSummary(studentId) {
    const summary = this.attendanceData.filter(
      (record) => record.student_id === studentId
    );
    return summary;
  }

  // User Story 4.3: Class Attendance Overview
  classAttendanceOverview() {

    if (this.attendanceData.Length === 0){
        return {message: 'No attendance data available'};
    }

    const overview = this.attendanceData.reduce((acc, record) => {
      if (!acc[record.date]) {
        acc[record.date] = { present: 0, absent: 0};
      }
      acc[record.date][record.status]++;
      return acc;
    }, {});
    return overview;
  }

  // User Story 4.4: Attendance Trends Analysis
  attendanceTrendsAnalysis() {
    const trends = this.attendanceData.reduce((acc, record) => {
      const month = new Date(record.date).getMonth();
      if (!acc[month]) {
        acc[month] = { present: 0, absent: 0 };
      }
      acc[month][record.status]++;
      return acc;
    }, {});
    return trends;
  }

  // User Story 4.5: Attendance Report Sharing
  shareAttendanceReport(startDate, endDate, recipient) {
    const report = this.generateAttendanceReport(startDate, endDate);
    // Logic to share the report (e.g., send an email, create a PDF, etc.)
    // For this example, we'll just log it to the console
    console.log(`Attendance Report for ${recipient}:`, report);
  }
}

module.exports = {
  Teacher,
  AttendanceError,
};
