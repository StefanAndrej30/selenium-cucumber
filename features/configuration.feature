@configuration @test
Feature: Configuration test


    Scenario: Upload certification file and expect to not be able to confirm it
        Given UI - I am on emprising page
        When UI - I login with username and password "stefan.marjanovic@greatplacetowork.com" "scKqtwsyCr4VC3q..10" as "GPTWUSER"
        Then UI - I expect that url contain "/dashboardUser"
        And UI - I select "Germany" affiliate
        And UI - I search for "2" clientId and click on it
        And UI - I click create survey button
        And UI - I click "Assess" survey
        And UI - I click lets get started button
        And UI - I click next button
        And UI - I enter "200" employes
        And UI - I click "Yes" do all of your employes have email address
        And UI - I click confirm button
        And UI - I choose "CERTIFICATION" type of upload and uplaod "199CertificationEmail.xlsx" file
        And UI - I expect that analyst message is "199 invitees uploaded, 200 invitees required"
        And UI - I expect that confirm upload button is not clickable