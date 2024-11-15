import Login from "./Pages/Login";
import Welcome from "./Pages/Welcome";
import SideBar from "./Components/SideBar";
import Student from "./Pages/Student";
import Automaty from "./Pages/Automaty";

describe("Automaty Tests", () => {
  beforeEach(() => {
    const automaty = new Automaty();
    automaty.navigate();
  });

  describe("login", () => {
    const login = new Login();
    const welcome = new Welcome();

    it("Should be able to log in with valid credentials", () => {
      login.signIn("admin", "admin");

      welcome.title.should("exist");
    });

    it("Should not be able to log in with invalid credentials", () => {
      login.signIn("admin1", "admin1");

      login.wrongCredentials.should("exist");
    });

    it("should be able to log out", () => {
      login.signIn("admin", "admin");

      welcome.logOut();

      login.loginText.should("exist");
    });
  });

  describe("Students", () => {
    const student = new Student();
    const sideBar = new SideBar();

    it("Should be able to complete the Student Form", () => {
      sideBar.sideBarStudent();

      student.Fill(
        "rafael",
        "bencosme",
        "rafaelabencosmed@gmail.com",
        "male",
        "8494720978",
        "09/27/1995"
      );
      student.register();

      student.registeredToast.should("exist");
    });

    it("Should display Student Form helper text", () => {
      sideBar.sideBarStudent();

      student.clearBirthDate();
      student.register();

      student.alerts.forEach((alert) => alert.should("exist"));
    });
  });
});
