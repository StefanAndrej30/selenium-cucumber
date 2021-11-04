@testingApi

Feature: Api testing

    Scenario: Post
        Given I post:
            """
            {
                "name": "MIRKO",
                "job": "leader"
            }
            """
        And I expect status code to be 201


    Scenario: Delete
        Given I delete
        And I expect status code to be 204



    Scenario: Patch
        Given I patch:
            """
            {
                "name": "morpheus",
                "job": "qa"
            }
            """
        And I expect status code to be 200
