@testingApi

Feature: Api testing
    # API test

    Scenario: Api get token
        Given Get user token
        When I set headers to be:
            """
            {
                "Content-type": "application/json; charset=utf-8",
                "Authorization": "USER",
                "gptw_client_id": "102999989",
                "gptw_affiliate_id": "DE1",
                "ConnectionId": "e3e03bc1-35c5-417f-a5c3-ffa9a76d82c9"
            }
            """
        And I create "ASSES" survey |status code: 200|
        And I edit survey: |status code: 200|
            """
            {
                "IsAnonymous": false,
                "StartDate": null,
                "CloseDate": "2040-11-27T18:00:00",
                "SurveyFlow": 1,
                "isToday": true,
                "QCertify": true,
                "QCountry": true
            }
            """
        And I put draft state to be 3 |status code: 200|




