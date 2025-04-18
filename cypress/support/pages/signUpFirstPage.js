class signUpFirstPage {
    constructor() {
        this.usernameInput = '[data-qa="signup-name"]';
        this.emailInput = '[data-qa="signup-email"]';
        this.signUpButton = '[data-qa="signup-button"]';
        this.errorMessage = 'p';

        this.URL = "https://www.automationexercise.com/login"
    }

    visit() {
        cy.visit(this.URL);
    }

    fillUsername(username) {
        cy.get(this.usernameInput).type(username);
    }

    fillEmail(email) {
        cy.get(this.emailInput).type(email);
    }

    submit() {
        cy.get(this.signUpButton).click();
    }

    getErrorMessage() {
        return cy.contains(this.errorMessage, 'Email Address already exist!');
    }
}

export default new signUpFirstPage();