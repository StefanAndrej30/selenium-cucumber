@mail @api

Feature: Test gmail-api


    Scenario: Expect that mail is recived for resend invitation for hr admin and that password was successfully reseted
        Given Check "userToken" token
        When I reset password for "884bf7e2-28f9-4bee-ad66-4f6c86746488" |status code: 200|
        Then Wait for mail "HR" label to have 1 mail
        And I get all mails in "HR" label
        And I get previosly recived mail
        And I expect mail headers for "PREVIOUSLY_RECIVED" message to be:
            """
            {
                "from": "Great Place to Work <support@greatplacetowork.com>",
                "subject": "New Account - Emprising",
                "sender": "support@greatplacetowork.com"
            }
            """
        And I expect mail body for "PREVIOUSLY_RECIVED" message to include: "Welcome. An account has been created for you at Emprising, the powerful people strategy and analytics platform from Great Place To Work® that helps you measure, monitor and continually strengthen your workplace culture."
        And I expect mail body for "PREVIOUSLY_RECIVED" message to include: "Note: To get started, you can setup your password"
        And I extract setup password link for "PREVIOUSLY_RECIVED" message
        And I visit previously recived setap password link
        And I create new password to be "Andrej10.10"
        And I expect message about created password to include "Password Created"