# @visual
Feature: Visual testing


    Scenario:test visual
        Given I open the browser

        And I visit "https://webdriver.io"
        When Save element "search" screenshots
        And should compare previously saved element with a baseline
        And Save in screen mode "saveScreen" screenshot
        And should compare previously saved screen with a baseline
        And Save in full screen mode "saveFullScreenPage" screenshot
        And should compare previously saved screen in full screean page mode with a baseline
        And Save in save tabbable mode "tabbable" screenshot
        Then should compare previously saved tabbable screenshots with a baseline


# Scenario Outline:test visual
#    Given I open the browser

#     And I visit "https://webdriver.io"
#     And I set resolution <RESOLUTION_NAME>
#     When Save element "search" screenshots
#     And should compare previously saved element with a baseline
#     And Save in screen mode "saveScreen" screenshot
#     And should compare previously saved screen with a baseline
#     And Save in full screen mode "saveFullScreenPage" screenshot
#     Then should compare previously saved screen in full screean page mode with a baseline

#     Examples:
#         | RESOLUTION_NAME |
#         | "4k"            |
#         | "2k"            |
#         | "FHD"           |
#         | "HD"            |