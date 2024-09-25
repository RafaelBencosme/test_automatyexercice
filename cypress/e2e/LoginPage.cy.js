class LoginPage {
  getLoginText = () => {
    return cy.get("#title-login");
  };

  getUserName = () => {
    return cy.get("#username");
  };

  getPassword = () => {
    return cy.get("#password");
  };

  getSignIn = () => {
    return cy.get("#sign-in");
  };

  getInvalidCredentialsText = () => {
    return cy.get(".MuiAlert-message");
  };

  signIn = (username, password) => {
    this.getUserName().type(username);
    this.getPassword().type(password);
    this.getSignIn().click();
  };

  wrongCredentialsText = () => {
    return this.getInvalidCredentialsText();
  };

  loginText = () => {
    return this.getLoginText();
  };
}
export default LoginPage;
