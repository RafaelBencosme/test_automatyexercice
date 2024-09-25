class StudentForm {
  getFirstName = () => {
    return cy.get("#firstName");
  };

  getLastName = () => {
    return cy.get("#lastName");
  };

  getEmail = () => {
    return cy.get("#email");
  };

  getGenderMale = () => {
    return cy.get(
      "#gender-male > .MuiButtonBase-root > .PrivateSwitchBase-input"
    );
  };

  getGenderFemale = () => {
    return cy.get(
      "#gender-female > .MuiButtonBase-root > .PrivateSwitchBase-input"
    );
  };

  getGenderOther = () => {
    return cy.get(
      "#gender-other > .MuiButtonBase-root > .PrivateSwitchBase-input"
    );
  };

  getPhone = () => {
    return cy.get("#phone");
  };

  getBirthDate = () => {
    return cy.get("#\\:r8\\:");
  };

  getRegisterButton = () => {
    return cy.get("#register");
  };

  getRegisteredText = () => {
    return cy.contains("Thanks for applying");
  };

  getInvalidFirstNameText = () => {
    return cy.get("#firstName-helper-text");
  };

  getInvalidLastNameText = () => {
    return cy.get("#lastName-helper-text");
  };

  getInvalidEmailText = () => {
    return cy.get("#email-helper-text");
  };

  getInvalidPhoneText = () => {
    return cy.get("#phone-helper-text");
  };

  getInvalidBirthDateText = () => {
    return cy.get("#\\:r8\\:-helper-text");
  };

  getInvalidProvinceText = () => {
    return cy.get("#province-provinces-helper-text");
  };

  FillMale = (firstname, lastname, email, phone, dateOfBirth) => {
    this.getFirstName().type(firstname);
    this.getLastName().type(lastname);
    this.getEmail().type(email);
    this.getGenderMale().click();
    this.getPhone().type(phone);
    this.getBirthDate().type(dateOfBirth);
    cy.get(".MuiAutocomplete-endAdornment > .MuiButtonBase-root").click();
    cy.get("#province-autocomplete-option-0").click();
  };

  FillFemale = (firstname, lastname, email, phone, dateOfBirth) => {
    this.getFirstName().type(firstname);
    this.getLastName().type(lastname);
    this.getEmail().type(email);
    this.getGenderFemale().click();
    this.getPhone().type(phone);
    this.getBirthDate().type(dateOfBirth);
    cy.get(".MuiAutocomplete-endAdornment > .MuiButtonBase-root").click();
    cy.get("#province-autocomplete-option-0").click();
  };

  FillOther = (firstname, lastname, email, phone, dateOfBirth) => {
    this.getFirstName().type(firstname);
    this.getLastName().type(lastname);
    this.getEmail().type(email);
    this.getGenderOther().click();
    this.getPhone().type(phone);
    this.getBirthDate().type(dateOfBirth);
    cy.get(".MuiAutocomplete-endAdornment > .MuiButtonBase-root").click();
    cy.get("#province-autocomplete-option-0").click();
  };

  register = () => {
    return this.getRegisterButton();
  };

  registeredText = () => {
    return this.getRegisteredText();
  };

  birthDateClear = () => {
    this.getBirthDate().clear();
  };

  invalidFirstName = () => {
    return this.getInvalidFirstNameText();
  };

  invalidLastName = () => {
    return this.getInvalidLastNameText();
  };

  invalidEmail = () => {
    return this.getInvalidEmailText();
  };

  invalidPhone = () => {
    return this.getInvalidPhoneText();
  };

  invalidBirthDate = () => {
    return this.getInvalidBirthDateText();
  };

  invalidProvince = () => {
    return this.getInvalidProvinceText();
  };
}

export default StudentForm;
