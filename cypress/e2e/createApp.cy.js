const DashboardPage = require("../support/pages/DashboardPage");
const LoginPage = require("../support/pages/LoginPage");
import { generateRandomAppName } from "../support/e2e";

describe("App creation using different flows", () => {
  const dashboardPage = new DashboardPage();
  const loginPage = new LoginPage();
  const AppName = generateRandomAppName();
  const fileName = `example-${AppName}.json`;

  beforeEach("Visits the website and verifies the title", () => {
    cy.fixture("testData").then((data) => {
      cy.visit("/");
      loginPage.verifyLoginUrl();
      cy.login(data.useremail, data.password);
    });
  });

  it("Basic app creation flow", () => {
    dashboardPage
      .verifyDashboardUrl()
      .CreateAppButton()
      .verifyWindowHeader("Create app")
      .enterAppName(AppName)
      .clickCreateAppButton()
      .goToDashboard()  
      .verifyCreatedAppOnDashboard(AppName);
  });

  it("App creation using import from device", () => {
    dashboardPage
      .clickEllipsis()
      .importFromDevice(fileName)
      .clickOnImportApp()
      .goToDashboard()
      .verifyCreatedAppOnDashboard(`example-${AppName}`);
  });

  it("App creation using template", () => {
    dashboardPage
      .clickEllipsis()
      .clickChooseFromTemplate()
      .selectAdminPanal()
      .clickCreateAppFromTemplate()
      .verifyWindowHeader("Create new app from template")
      .enterAppName(`${AppName}temp`)
      .clickCreateAppButton()
      .goToDashboard()
      .verifyCreatedAppOnDashboard(`${AppName}temp`);
  });
});
