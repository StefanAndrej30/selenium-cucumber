@configuration
Feature: Configuration test


    Scenario: Upload certification file and expect to not be able to confirm it
        Given I am on emprising page
        When I login with username and password "stefan.marjanovic@greatplacetowork.com" "scKqtwsyCr4VC3q.." as "GPTWUSER"
        Then I expect that url contain "/dashboardUser"
        And I select "Germany" affiliate
        And I search for "1643" clientId and click on it
        And I click create survey button
        And I click "Assess" survey
        And I click lets get started button
        And I click next button
        And I enter "200" employes
        And I click "Yes" do all of your employes have email address
        And I click confirm button
        And I choose "CERTIFICATION" type of upload and uplaod "199CertificationEmail.xlsx" file
        And I expect that analyst message is "199 invitees uploaded, 200 invitees required"
        And I expect that confirm upload button is not clickable