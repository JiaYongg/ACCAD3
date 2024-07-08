Feature: Generate Attendance Report
    # As a teacher
    # I want to generate a report of attendance for a specific period
    # So that I can analyze attendance trends
    
    Scenario: Generate attendance report 
        Given a teacher has a class with 10 students
        When the teacher generates an attendance report for '2024-07-01' to '2024-11-20'
        Then the report should show that 10 students attended the class
    