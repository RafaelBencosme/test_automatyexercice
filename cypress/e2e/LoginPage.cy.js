class LoginPage {
  signIn = (username, password) => {
    cy.get("#username").type(username);
    cy.get("#password").type(password);
    cy.get("#sign-in").click();
  };

  getWrongCredentials = () => {
    return cy.get(".MuiAlert-message");
  };

  getLoginText = () => {
    return cy.get("#title-login");
  };
}
export default LoginPage;