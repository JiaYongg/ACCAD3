Feature: Class Attendance Overview
    # As a teacher
    # I want to view an overview of attendance for the entire class
    # So that I can see overall attendance rates

    Scenario: View attendance overview
        Given I am a teacher with 5 students in the class
        When I view the attendance overview
        Then I should see the attendance rates for the entire class
    
    Scenario: View attendance overview with no attendance data
        Given I am a teacher with 5 students in the class
        And There is no attendance data for the class
        When I view the attendance overview
        Then I should see a message indicating that there is no attendance data
    
    Scenario: View attendance overview with missing attendance data
        Given I am a teacher with 5 students in the class
        And some students have missing attendance data
        When I view the attendance overview
        Then I should see the attendance rates for the entire class