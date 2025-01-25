class LoginPage {
  enterUserEmail(useremail) {
    cy.get("#email").type(useremail);
    return this;
  }

  enterPassword(password) {
    cy.get("#password").type(password);
    return this;
  }

  clickLoginButton() {
    cy.get(".button-text").click();
    return this;
  }

  closepopup() {
    cy.get(".btn-close").click();
    return this;
  }
  verifyLoginUrl() {
    cy.url().should("include", "/login");
    return this;
  }
}

module.exports = LoginPage;
