class WelcomePage {
  getWelcomeText = () => {
    return cy.get("#title-welcome-back", { timeout: 10000 });
  };

  logOut = () => {
    return cy.get("#sign-out", { timeout: 10000 }).click();
  };
}

export default WelcomePage;