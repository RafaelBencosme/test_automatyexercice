class Student {
  Fill = (firstname, lastname, email, gender, phone, dateOfBirth) => {
    const validGender = ['male', 'female', 'other'];

    if (!validGender.includes(gender)){
      throw new Error("Invalid gender provided. It should be 'male', 'female', or 'other'.");
    }

    cy.get("#firstName").type(firstname);
    cy.get("#lastName").type(lastname);
    cy.get("#email").type(email);
    cy.get(`#gender-${gender} > .MuiButtonBase-root > .PrivateSwitchBase-input`).click();
    cy.get("#phone").type(phone);
    cy.get("#\\:r8\\:").type(dateOfBirth);
    cy.get(".MuiAutocomplete-endAdornment > .MuiButtonBase-root").click();
    cy.get("#province-autocomplete-option-0").click();
};

get alerts() {

  return [
    cy.get("#firstName-helper-text"),
    cy.get("#lastName-helper-text"),
    cy.get("#email-helper-text"),
    cy.get("#phone-helper-text"),
    cy.get("#\\:r8\\:-helper-text"),
    cy.get("#province-provinces-helper-text"),
  ]
}

  register() {
   cy.get("#register").click();
  };

  get registeredToast() {
    return cy.contains("Thanks for");
  };

  clearBirthDate() {
    cy.get("#\\:r8\\:").clear();
  };
}

export default Student;