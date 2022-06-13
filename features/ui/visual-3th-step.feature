@visual
Feature: Check invitation modal on 3-th step

    Scenario Outline: check invitation modal <RESOLUTION_NAME>
        #API
        Given I create new project with random name |status code: 201|
        And I create a new "EMAIL" survey |status code: 201|
        And I put draft state to be "2" |status code: 200|
        #UI
        And I open the browser
        And I set token in session storage to "clientToken"
        And I visit previously created survey with next url "assessment-design/survey-design"
        And I click ok on design guidance modal
        And I set resolution <RESOLUTION_NAME>
        When I click on schedule and messaging modal
        And I click invitation button
        And I wait 6000ms
        And I save take preview button on invitation modal "preview" screenshot
        And I should compare preview button on invitation modal with baseline
        And Save in screen mode "invitation_modal_screen_mode" screenshot
        And should compare previously saved screen with a baseline
        And Save in full screen mode "invitation_modal_full_screen_mode" screenshot
        And should compare previously saved screen in full screean page mode with a baseline
        And Save in save tabbable mode "invitation_modal_tabbable_mode" screenshot
        Then should compare previously saved tabbable screenshots with a baseline


        Examples:
            | RESOLUTION_NAME |
            | "4k"            |
            | "2k"            |
            | "FHD"           |
            | "HD"            |