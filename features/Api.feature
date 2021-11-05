@testingApi

Feature: Api testing


    Scenario: Api get token
        Given API - Get user token
        When API - I set headers to be:
            """
            {
                "Content-type": "application/json; charset=utf-8",
                "Authorization": "USER",
                "gptw_client_id": "146000003",
                "gptw_affiliate_id": "BR1",
                "ConnectionId": "e3e03bc1-35c5-417f-a5c3-ffa9a76d82c9"
            }
            """
        And I create "ASSES" survey
        And API - I edit survey:
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
        And I put draft state to be 3