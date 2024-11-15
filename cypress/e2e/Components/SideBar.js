class SideBar {
  sideBarLogin() {
   cy.get(
      "#menu-login > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root"
    ).click();
  };

  sideBarStudent() {
   cy.get(
      "#menu-students > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root"
    ).click();
  };

  sideBarContact() {
   cy.get(
      "#menu-upload > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root"
    ).click();
  };
}

export default SideBar;