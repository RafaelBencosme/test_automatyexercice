class SideBar {
  getSideBarLogin = () => {
    return cy.get(
      "#menu-login > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root"
    );
  };

  getSideBarStudent = () => {
    return cy.get(
      "#menu-students > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root"
    );
  };

  getSideBarContact = () => {
    return cy.get(
      "#menu-upload > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root"
    );
  };

  sideBarLogin = () => {
    return this.getSideBarLogin();
  };

  sideBarStudent = () => {
    return this.getSideBarStudent();
  };

  sideBarContact = () => {
    return this.getSideBarContact();
  };
}

export default SideBar;
