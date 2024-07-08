Feature: Attendance Trends Analysis
    # As a teacher
    # I want to analyze attendance trends over time
    # So that I can identify and address any issues

    Scenario: View attendance trends
        Given I am teacher with 5 students in the class
        When I view the attendance trends
        Then I should see a graph of attendance rates over time
