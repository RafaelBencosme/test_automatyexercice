class WelcomePage {
  getWelcomeText = () => {
    return cy.get("#title-welcome-back", { timeout: 10000 });
  };

  getLogOut = () => {
    return cy.get("#sign-out", { timeout: 10000 });
  };

  welcomeText = () => {
    return this.getWelcomeText();
  };

  logout = () => {
    return this.getLogOut();
  };
}

export default WelcomePage;
