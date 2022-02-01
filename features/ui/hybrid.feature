@hybrid @ui
Feature: Configuration test

    Scenario: Upload certification file and expect to not be able to confirm it
        #API
        Given I create new project with random name |status code: 201|
        And I create a new "EMAIL" survey |status code: 201|
        And I edit survey: |status code: 200|
            """
            {
                "IsAnonymous": true,
                "StartDate": null,
                "CloseDate": "2040-11-27T18:00:00",
                "SurveyFlow": 1,
                "isToday": true,
                "QCertify": false,
                "QCountry": false,
                "NumberOfInvites": 30
            }
            """
        And I put draft state to be "2" |status code: 200|
        #UI
        And I set token in session storage to "clientToken"
        And I visit previously created survey with next url "assessment-design/survey-design"
        And I click OK button
        When I click schedule and messaging modal
        Then I expect that placeholder "support@example.com" is displayed