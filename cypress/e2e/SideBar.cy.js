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
}

export default SideBar;