import LoginPage from "./LoginPage.cy";
import WelcomePage from "./WelcomePage.cy";
import SideBar from "./SideBar.cy";
import StudentForm from "./StudentForm.cy";

describe("Automaty Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should be able to log in with valid credentials", () => {
    const login = new LoginPage();
    login.signIn("admin", "admin");

    const welcomePage = new WelcomePage();
    welcomePage.welcomeText().should("exist");
  });

  it("Should not be able to log in with invalid credentials", () => {
    const login = new LoginPage();
    login.signIn("admin1", "admin1");

    login.wrongCredentialsText().should("exist");
  });

  it("should be able to log out", () => {
    const login = new LoginPage();
    login.signIn("admin", "admin");

    const welcomePage = new WelcomePage();
    welcomePage.logout().click();

    login.loginText().should("exist");
  });

  it("Should be able to complete the Student Form", () => {
    const sideBar = new SideBar();
    sideBar.sideBarStudent().click();

    const studentForm = new StudentForm();
    studentForm.FillMale(
      "rafael",
      "bencosme",
      "rafaelabencosmed@gmail.com",
      "8494720978",
      "09/27/1995"
    );
    studentForm.register().click();

    studentForm.registeredText().should("exist");
  });

  it("Should display Student Form helper text", () => {
    const sideBar = new SideBar();
    sideBar.sideBarStudent().click();

    const studentForm = new StudentForm();
    studentForm.birthDateClear();
    studentForm.register().click();

    studentForm.invalidFirstName().should("exist");
    studentForm.invalidLastName().should("exist");
    studentForm.invalidEmail().should("exist");
    studentForm.invalidPhone().should("exist");
    studentForm.invalidBirthDate().should("exist");
    studentForm.invalidProvince().should("exist");
  });
});
