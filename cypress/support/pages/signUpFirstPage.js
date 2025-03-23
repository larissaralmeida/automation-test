class signUpFirstPage {
    constructor() {
        this.usernameInput = '#signup-name';
        this.emailInput = '#signup-email';
        this.signUpButton = '#signup-button';

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
}

export default new signUpFirstPage();