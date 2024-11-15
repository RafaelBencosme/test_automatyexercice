class Welcome {
  get title() {
    return cy.get("#title-welcome-back", { timeout: 10000 });
  };

  logOut() {
   cy.get("#sign-out", { timeout: 10000 }).click();
  };
}

export default Welcome;