@api @mail

Feature: Test gmail-api
    @getMail
    Scenario: check gmail api
        Given Check "userToken" token
        When I reset password for "884bf7e2-28f9-4bee-ad66-4f6c86746488" |status code: 200|
        And I reset password for "884bf7e2-28f9-4bee-ad66-4f6c86746488" |status code: 200|
        Then Wait for mail "HR" label to have 2 mail
        And I get all mails in "HR" label
        And I get messageId for "LAST_MAIL"

    @sendMail
    Scenario: send gmail
        Given I send mail to "stefanandrej.project@gmail.com" with "Testing gmail api" as subject and body:
            """
            Testing gmail api mail body
            """
        Then Wait for mail "INBOX" label to have 1 mail
        And I get all mails in "INBOX" label
        And I get previosly recived mail
        And I expect mail body for "PREVIOUSLY_RECIVED" message to include: "Testing gmail api mail body"