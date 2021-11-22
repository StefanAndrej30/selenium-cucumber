Selelenium webdriver with node.js and cucumber for automating UI test


## Download project
* go to my github page (https://github.com/StefanAndrej30/selenium-cucumber/tree/master);


## Learn more about selenium with node js
- Selenium webdriver (https://www.selenium.dev/documentation/webdriver/)

## Setup
* instal node js : (https://nodejs.org/en/)
* Install npm packages in selenium-cucumber folder
* $npm i


## Run
* Navigate into selenium-cucumber* and before runing the test run npm start and after that you can run the test suite for specific environment:
## dev
ENV=dev TAGS=@tagName npm run UI
## qa
ENV=qa TAGS=@tagName npm run UI
## ltd
ENV=ltd TAGS=@tagName npm run UI
## prod
ENV=prod TAGS=@tagName npm run UI

- To run with cucumber html reporter
ENV=env TAGS=@tagName npm run UI-Reporter and after test reporter will be generated automaticly


## How cucumber works
* In cucumber you hafe stepDefintion and feature files
* Cucumber is writen in gherking language
* The primary keywords are:
Feature
Rule (as of Gherkin 6)
Example (or Scenario)
Given, When, Then, And, But for steps (or *)
Background
Scenario Outline (or Scenario Template)
Examples (or Scenarios)

* There are a few secondary keywords as well:

""" (Doc Strings)
| (Data Tables)
@ (Tags)
# (Comments)

Given steps are used to describe the initial context of the system - the scene of the scenario. It is typically something that happened in the past.
When steps are used to describe an event, or an action. This can be a person interacting with the system, or it can be an event triggered by another system.
Then steps are used to describe an expected outcome, or result.
A Background allows you to add some context to the scenarios that follow it. It can contain one or more Given steps, which are run before each scenario, but after any Before hooks.
A Background is placed before the first Scenario/Example, at the same level of indentation.


for more info:(https://cucumber.io/docs/gherkin/reference/)

## World
* World is an isolated context for each scenario, exposed to the hooks and steps as this, enabling you to set and recall some state across the lifecycle of your scenario.
* Note that your hooks and step definition functions cannot reference the world as this if you use arrow functions. See FAQ for details.
* Example:

const { When } = require('@cucumber/cucumber')

When('something happens', async function() {
  this.foo = 'bar'
})


The resources of the libraries used can be found here:
- Cucumber runner [cucumber-js] (https://cucumber.io/)
- Chai assertion library [chai] (https://www.chaijs.com)
- Cucumber html reporter [cucumber-html-reporter] (https://www.npmjs.com/package/cucumber-html-reporter)
