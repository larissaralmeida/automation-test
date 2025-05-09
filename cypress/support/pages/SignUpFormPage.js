class SignUpFormPage {

    get radioButtonSelector() {
        return cy.get('input[type="radio"][name="title"]');
    }

    get nameInput() {
        return cy.get('#name');
    }

    get passwordInput() {
        return cy.get('#password');
    }

    get birthDaySelect() {
        return cy.get('#days');
    }

    get birthMonthSelect() {
        return cy.get('#months');
    }

    get birthYearSelect() {
        return cy.get('#years');
    }

    get firstNameInput() {
        return cy.get('#first_name');
    }

    get lastNameInput() {
        return cy.get('#last_name');
    }

    get addressInput() {
        return cy.get('#address1');
    }

    get countrySelect() {
        return cy.get('#country');
    }

    get stateInput() {
        return cy.get('#state');
    }

    get cityInput() {
        return cy.get('#city');
    }

    get zipCodeInput() {
        return cy.get('#zipcode');
    }

    get mobileNumberInput() {
        return cy.get('#mobile_number');
    }

    get submitButton() {
        return cy.get('[data-qa="create-account"]');
    }


    selectGender(gender) {
        this.radioButtonSelector
            .filter(`[value="${gender}"]`)
            .check();
    }

    fillPassword(password) {
        this.passwordInput.type(password);
    }

    selectBirthDate(day, month, year) {
        this.birthDaySelect.select(day);
        this.birthMonthSelect.select(month);
        this.birthYearSelect.select(year);
    }

    fillFirstName(firstName) {
        this.firstNameInput.type(firstName);
    }

    fillLastName(lastName) {
        this.lastNameInput.type(lastName);
    }

    fillAddress(address) {
        this.addressInput.type(address);
    }

    fillCountry(country) {
        this.countrySelect.select(country);
    }

    fillState(state) {
        this.stateInput.type(state);
    }

    fillCity(city) {
        this.cityInput.type(city);
    }

    fillZipCode(zipcode) {
        this.zipCodeInput.type(zipcode);
    }

    fillMobileNumber(mobileNumber) {
        this.mobileNumberInput.type(mobileNumber);
    }

    submitForm() {
        this.submitButton.click();
    }
}

export default new SignUpFormPage();