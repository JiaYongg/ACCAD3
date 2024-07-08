Feature: Generate Attendance Report
    # As a teacher
    # I want to generate a report of attendance for a specific period
    # So that I can analyze attendance trends
    
    Scenario: Generate attendance report for the month of January (no absences)
        Given a teacher has a class with 10 students
        When the teacher generates an attendance report for the month of January
        Then the report should show that 8 students attended the class
    
    Scenario: Generate attendance report for the month of January (with absences)
        Given a teacher has a class with 10 students
        When the teacher generates an attendance report for the month of January
        Then the report should show that 2 students were absent from the class
