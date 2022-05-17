@api @test @download
Feature: Api testing new test
    # API test

    Scenario:Api get token
        Given I create new project with random name |status code: 201|
        When I create a new "YYY" survey |status code: 201|
        And I edit survey: |status code: 200|
            """
            {
                "SurveyFlow": 1,
                "QCertify": false,
                "QCountry": false,
                "NumberOfInvites": 30
            }
            """
        And I schdedule survey: |status code: 200|
            """
            {
                "startDate": null,
                "closeDate": "2035-04-16T18:00:00.000",
                "isToday": true
            }
            """
        And I put draft state to be "3" |status code: 200|
        And I download "YYY-template.xlsx" file
        And I wait for file "YYY-template.xlsx" to be present
        And Check file "YYY-template.xlsx":
            """
            [
                {
                    "Email": "test01@emailaddress.com",
                    "Managerial Level": "Employee/Individual Contributor (no people management responsibility)",
                    "Age": "25 years or younger",
                    "Tenure": "Less than 2 years",
                    "Work Status": "Full-time"
                },
                {
                    "Email": "test02@emailaddress.com",
                    "Managerial Level": "Frontline Manager or Supervisor (first tier manager; supervises other employees, not other managers)",
                    "Age": "26 years to 34 years",
                    "Tenure": "2 years to 5 years",
                    "Work Status": "Part-time"
                },
                {
                    "Email": "test03@emailaddress.com",
                    "Managerial Level": "Mid-Level Manager (runs major departments or divisions, but not part of executive team)",
                    "Age": "35 years to 44 years",
                    "Tenure": "6 years to 10 years",
                    "Work Status": "Full-time"
                },
                {
                    "Email": "test04@emailaddress.com",
                    "Managerial Level": "Executive/C-Level Leader (Highest level leaders; CEO/President and the C-suite executives who report to CEO)",
                    "Age": "45 years to 54 years",
                    "Tenure": "11 years to 15 years",
                    "Work Status": "Part-time"
                },
                {
                    "Email": "test05@emailaddress.com",
                    "Managerial Level": "Employee/Individual Contributor (no people management responsibility)",
                    "Age": "55 years or older",
                    "Tenure": "16 years to 20 years",
                    "Work Status": "Full-time"
                },
                {
                    "Email": "test06@emailaddress.com",
                    "Managerial Level": "Frontline Manager or Supervisor (first tier manager; supervises other employees, not other managers)",
                    "Age": "25 years or younger",
                    "Tenure": "Over 20 years",
                    "Work Status": "Part-time"
                },
                {
                    "Email": "test07@emailaddress.com",
                    "Managerial Level": "Mid-Level Manager (runs major departments or divisions, but not part of executive team)",
                    "Age": "26 years to 34 years",
                    "Tenure": "Less than 2 years",
                    "Work Status": "Full-time"
                },
                {
                    "Email": "test08@emailaddress.com",
                    "Managerial Level": "Executive/C-Level Leader (Highest level leaders; CEO/President and the C-suite executives who report to CEO)",
                    "Age": "35 years to 44 years",
                    "Tenure": "2 years to 5 years",
                    "Work Status": "Part-time"
                },
                {
                    "Email": "test09@emailaddress.com",
                    "Managerial Level": "Employee/Individual Contributor (no people management responsibility)",
                    "Age": "45 years to 54 years",
                    "Tenure": "6 years to 10 years",
                    "Work Status": "Full-time"
                },
                {
                    "Email": "test10@emailaddress.com",
                    "Managerial Level": "Frontline Manager or Supervisor (first tier manager; supervises other employees, not other managers)",
                    "Age": "55 years or older",
                    "Tenure": "11 years to 15 years",
                    "Work Status": "Part-time"
                },
                {
                    "Email": "test11@emailaddress.com",
                    "Managerial Level": "Mid-Level Manager (runs major departments or divisions, but not part of executive team)",
                    "Age": "25 years or younger",
                    "Tenure": "16 years to 20 years",
                    "Work Status": "Full-time"
                },
                {
                    "Email": "test12@emailaddress.com",
                    "Managerial Level": "Executive/C-Level Leader (Highest level leaders; CEO/President and the C-suite executives who report to CEO)",
                    "Age": "26 years to 34 years",
                    "Tenure": "Over 20 years",
                    "Work Status": "Part-time"
                }
            ]
            """

#     And I download "YYY-template.xlsx" file
# And I wait for file "YYY-template.xlsx" to be present

# Scenario Outline: Check file
#     And Check file <SHEETNAME> <CELL> <VALUE>
#     Examples:
#         | SHEETNAME  | CELL  |  | VALUE                                                                                                          |
#         | "Template" | "A2"  |  | "test01@emailaddress.com"                                                                                      |
#         | "Template" | "C6"  |  | "5 years or older"                                                                                            |
#         | "Template" | "B13" |  | "Executive/C-Level Leader (Highest level leaders; CEO/President and the C-suite executives who report to CEO)" |