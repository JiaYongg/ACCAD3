Feature: Student Attendance Summary
    # As a teacher
    # I want to view a summary of attendance for each student
    # So that I can identify patterns and issues

    Scenario:
        Given a teacher has a class with 10 students
        When the teacher views the attendance summary
        Then the summary should show the attendance of each student
