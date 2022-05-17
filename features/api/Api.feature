Feature: Api testing
    # API test

    Scenario: Api get token
        Given I create new project with random name |status code: 201|
        When I create a new "ANONYMOUS" survey |status code: 201|
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
        And I put draft state to be "4" |status code: 200|
        Then I publish survey |status code: 200|