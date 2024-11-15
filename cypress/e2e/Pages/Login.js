class LoginPage {
  signIn = (username, password) => {
    cy.get("#username").type(username);
    cy.get("#password").type(password);
    cy.get("#sign-in").click();
  };

  get wrongCredentials() {
    return cy.get(".MuiAlert-message");
  };

  get loginText() {
    return cy.get("#title-login");
  };
}

export default LoginPage;