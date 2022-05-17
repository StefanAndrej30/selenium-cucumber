@hybrid @ui
Feature: Configuration test


    Scenario: Hybrid
        #API
        Given I create new project with random name |status code: 201|
        And I create a new "EMAIL" survey |status code: 201|
        And I put draft state to be "2" |status code: 200|
        #UI
        And I set token in session storage to "clientToken"
        And I visit previously created survey with next url "assessment-design/survey-design"
        And I click ok on design guidance modal
        When I click on schedule and messaging modal
        Then I expect that place holder "support@example.com" is displayed