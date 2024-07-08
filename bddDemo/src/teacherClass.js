class Teacher {
    constructor(attendanceData) {
        this.attendanceData = attendanceData; // Array of attendance records
    }

    // User Story 4.1: Generate Attendance Report
    generateAttendanceReport(startDate, endDate) {
        const report = this.attendanceData.filter(record => {
            const date = new Date(record.date);
            return date >= new Date(startDate) && date <= new Date(endDate);
        });
        return report;
    }

    // User Story 4.2: Student Attendance Summary
    studentAttendanceSummary(studentId) {
        const summary = this.attendanceData.filter(record => record.student_id === studentId);
        return summary;
    }

    // User Story 4.3: Class Attendance Overview
    classAttendanceOverview() {
        const overview = this.attendanceData.reduce((acc, record) => {
            if (!acc[record.date]) {
                acc[record.date] = { present: 0, absent: 0 };
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
    shareAttendanceReport(startDate, endDate) {
        const report = this.generateAttendanceReport(startDate, endDate);
        // Logic to share the report (e.g., send an email, create a PDF, etc.)
        // For this example, we'll just log it to the console
        console.log("Attendance Report:", report);
    }
}

// Sample attendance data
const attendanceData = [
    { date: '2024-07-01', student_id: 1, status: 'present' },
    { date: '2024-07-02', student_id: 1, status: 'absent' },
    { date: '2024-07-01', student_id: 2, status: 'present' },
    { date: '2024-07-02', student_id: 2, status: 'present' },
    // ...more records
];

// Usage example
const teacher = new Teacher(attendanceData);

// Generate attendance report for a specific period
console.log(teacher.generateAttendanceReport('2024-07-01', '2024-07-02'));

// View a summary of attendance for a specific student
console.log(teacher.studentAttendanceSummary(1));

// View an overview of attendance for the entire class
console.log(teacher.classAttendanceOverview());

// Analyze attendance trends over time
console.log(teacher.attendanceTrendsAnalysis());

// Share attendance report
teacher.shareAttendanceReport('2024-07-01', '2024-07-02');
