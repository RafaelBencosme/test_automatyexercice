import LoginPage from "./LoginPage.cy";
import WelcomePage from "./WelcomePage.cy";
import SideBar from "./SideBar.cy";
import StudentForm from "./StudentForm.cy";

const login = new LoginPage();
const studentForm = new StudentForm();
const sideBar = new SideBar();
const welcomePage = new WelcomePage();

describe("Automaty Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should be able to log in with valid credentials", () => {
    login.signIn("admin", "admin");

    welcomePage.getWelcomeText().should("exist");
  });

  it("Should not be able to log in with invalid credentials", () => {
    login.signIn("admin1", "admin1");

    login.getWrongCredentials().should("exist");
  });

  it("should be able to log out", () => {
    login.signIn("admin", "admin");

    welcomePage.logOut();

    login.getLoginText().should("exist");
  });

  it("Should be able to complete the Student Form", () => {
    sideBar.getSideBarStudent().click();

    studentForm.Fill(
      "rafael",
      "bencosme",
      "rafaelabencosmed@gmail.com",
      "male",
      "8494720978",
      "09/27/1995"
    );
    studentForm.register();

    studentForm.getRegisteredText().should("exist");
  });

  it("Should display Student Form helper text", () => {
    sideBar.getSideBarStudent().click();

    studentForm.birthDateClear();
    studentForm.register();

    const alerts = [
      studentForm.getInvalidFirstName(),
      studentForm.getInvalidLastName(),
      studentForm.getInvalidEmail(),
      studentForm.getInvalidPhone(),
      studentForm.getInvalidBirthDate(),
      studentForm.getInvalidProvince(),
    ];

    alerts.forEach((alert) => {
      alert.should("exist");
    });
  });
});
