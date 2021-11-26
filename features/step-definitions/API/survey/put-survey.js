const { Then } = require('@cucumber/cucumber');
const { httpConfig } = require('../../../commons/httpConfig');
const supertest = require('supertest');
const request = supertest(httpConfig.emprisingBaseUrl);
const authorize = require('../../../commons/authorization');


Then('I edit survey: |status code: {int}|', async function (statusCode ,docString) {
    const parsedBody = await JSON.parse(docString);

    const postBody = {

        "ProjectID": `${this.projectId}`,
        "SurveyId": `${this.surveyId}`,
        "ClientId": `${this.clientId}`,
        "AffiliateId": "BR1",
        "Name": `${this.surveyName}`,
        "NameWithSuperscript": `${this.surveyName}`,
        "Status": 1,
        "IsAnonymous": parsedBody.IsAnonymous,
        "StartDate": parsedBody.StartDate,
        "CloseDate":parsedBody.CloseDate,
        "Link": "7VHET2PV7I",
        "NumberOfInvites": null || parsedBody.NumberOfInvites,
        "Modifier": "GPTW Orchestrator User",
        "Modified": "2021-11-05T19:01:01.697",
        "IsToday": parsedBody.IsToday,
        "ContactEmail": "fewfwe@gmail.com",
        "DraftState": 2,
        "IsEDFCompleted": false,
        "IsEDFFlow": false,
        "IsEnabled": true,
        "IsPublished": null,
        "LoginEnabled": false,
        "Label": null,
        "TemplateId": null,
        "CloneTemplateType": 0,
        "TemplateType": 1,
        "CertificationTemplateId": null,
        "SequenceNumber": null,
        "ProjectName": "Great Place to Work® Certification Program",
        "IsCertificationSurvey": true,
        "CertificationInfo": {
            "EmployeesCount": null,
            "AllHaveEmail": null,
            "AnonymousCount": 0,
            "IsExtended": false,
            "TemplateName": "StandardV2",
            "SequenceNumber": null,
            "SBMessageId": null,
            "DateCreated": "2021-11-05T22:01:01.697",
            "OrchestratorSurveyTemplate": "STD2017DEC",
            "ProductIdentifier": "StandardV2",
            "EngagementId": null
        },
        "SurveyFlow": parsedBody.SurveyFlow,
        "HasAnalysis": false,
        "Restrictions": {
            "AllowDemographicCustomization": false,
            "AllowOpenEndedCustomization": false,
            "AllowStatementCustomization": false,
            "CanAddRemoveFocusAreas": false,
            "CanManageFocusAreasDuringDesign": false,
            "CanManageFocusAreasDuringReporting": true,
            "CanRenameSurvey": false,
            "CanUseEDF": false,
            "MaxDemographics": 8,
            "MaxOpenEnded": 2,
            "MaxStatements": 60
        },
        "SurveyType": 2,
        "IsCreatedByOrchestrator": false,
        "DefaultCultureId": "pt-BR",
        "CommunicationCultureId": "pt-BR",
        "QCertify": parsedBody.QCertify,
        "QCountry": parsedBody.QCountry,
        "QCountryList": [
            "BR"
        ],
        "_isDraft": true,
        "_isPending": false,
        "_isLive": false,
        "_isCompleted": false,
        "_isUnpublished": false,
        "_isUnrestricted": false,
        "_isAssess": true,
        "_isAnalyze": false,
        "_isAccelerate": false,
        "TimeZone": "E. South America Standard Time",
        "_navigation": "design",
        "_expandSection": 1
    };

    this.setResponse(await request
        .put(`/api/Surveys/${this.surveyId}`)
        .send(postBody)
        .set(authorize.getDefaultHeaders())
        .expect(statusCode)
    )
});