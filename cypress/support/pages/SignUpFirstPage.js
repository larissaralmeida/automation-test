class SignUpFirstPage {

    get url() {
        return "https://www.automationexercise.com/login";
    }

    get usernameInput() {
        return cy.get('[data-qa="signup-name"]');
    }

    get emailInput() {
        return cy.get('[data-qa="signup-email"]');
    }

    get signUpButton() {
        return cy.get('[data-qa="signup-button"]');
    }
    get errorMessage() {
        return cy.contains('Email Address already exist!');
    }

    visit() {
        cy.visit(this.url);
    }

    fillUsername(username) {
        this.usernameInput.type(username);
    }

    fillEmail(email) {
        this.emailInput.type(email);
    }

    submit() {
        this.signUpButton.click();
    }
}

export default new SignUpFirstPage();