Feature: Student Attendance Summary

    # As a teacher
    # I want to share attendance reports with parents or administrators
    # So that they are informed about students' attendance

    Scenario:
        Given this teacher has a class with 10 students
        When the teacher views the attendance summary 2
        Then the teacher should be able to share the summary with parents or administrators
    
    
