class signUpFormPage {
    constructor() {
        this.radioButtonSelector = 'input[type="radio"][name="title"]';
        this.nameInput = '#name';
        this.passwordInput = '#password';
        this.birthDaySelect = '#days';
        this.birthMonthSelect = '#months';
        this.birthYearSelect = '#years';
        this.firstNameInput = '#first_name';
        this.lastNameInput = '#last_name';
        this.adressInput = '#address1';
        this.countrySelect = '#country';
        this.stateInput = '#state';
        this.cityInput = '#city';
        this.zipCodeInput = '#zipcode';
        this.mobileNumberInput = '#mobile_number';
        this.submitButton = '[data-qa="create-account"]';

    }

    selectGender(gender) {
        cy.get(this.radioButtonSelector)
            .filter(`[value="${gender}"]`)
            .check();
    }

    fillName(name) {
        cy.get(this.nameInput).type(name);
    }

    fillPassword(password) {
        cy.get(this.passwordInput).type(password);
    }

    selectBirthDate(day, month, year) {
        cy.get(this.birthDaySelect).select(day);
        cy.get(this.birthMonthSelect).select(month);
        cy.get(this.birthYearSelect).select(year);
    }

    fillFirstName(firstName) {
        cy.get(this.firstNameInput).type(firstName);
    }

    fillLastName(lastName) {
        cy.get(this.lastNameInput).type(lastName);
    }

    fillAddress(address) {
        cy.get(this.adressInput).type(address);
    }

    fillCountry(country) {
        cy.get(this.countrySelect).select(country);
    }

    fillState(state) {
        cy.get(this.stateInput).type(state);
    }

    fillCity(city) {
        cy.get(this.cityInput).type(city);
    }

    fillZipCode(zipcode) {
        cy.get(this.zipCodeInput).type(zipcode);
    }

    fillMobileNumber(mobileNumber) {
        cy.get(this.mobileNumberInput).type(mobileNumber);
    }

    submitForm() {
        cy.get(this.submitButton).click();
    }
}

export default new signUpFormPage();