class DashboardPage {
  goToDashboard() {
    cy.visit("/qa-automation");
    return this;
  }

  verifyDashboardUrl() {
    cy.url().should("include", "/qa-automation");
    return this;
  }

  CreateAppButton() {
    cy.get('[data-cy="create-new-app-button"]').click({force: true});
    return this;
  }

  verifyCrateAppWindow() {
    cy.get('[data-cy="create-app-title"]').should("have.text", "Create app");
    return this;
  }

  enterAppName(AppName) {
    cy.get('[data-cy="app-name-input"]').clear().type(AppName);
    return this;
  }

  clickCreateAppButton() {
    cy.get('[data-cy="+-create-app"]').click();
    return this;
  }

  verifyCreatedAppOnDashboard(AppName) {
    cy.reload();
    cy.get("div h3").first().should("contain.text", AppName);
    cy.log("Created the App" + `${AppName}`);
    return this;
  }

  clickEllipsis() {
    cy.get('[data-cy="import-dropdown-menu"]').click({force: true});
    return this;
  }

  importFromDevice(filename) {
    cy.get('[data-cy="import-option-input"]').attachFile({
      filePath: "example.json",
      fileName: filename,
    });
    return this;
  }

  clickOnImportApp() {
    cy.get('[data-cy="import-app"]').click();
    return this;
  }

  clickChooseFromTemplate() {
    cy.get('[data-cy="choose-from-template-button"]').click();
    return this;
  }

  selectAdminPanal() {
    cy.get('[data-cy="admin-panel-tooljet-db-list-item"]').click();
    return this;
  }

  clickCreateAppFromTemplate() {
    cy.get('[data-cy="create-application-from-template-button"]').click();
    return this;
  }

  verifyWindowHeader(text) {
    cy.get(".modal-header div").should("have.text", text);
    return this;
  }
}

module.exports = DashboardPage;
