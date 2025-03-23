class signInPage {
    constructor() {
        this.emailInput = '[data-qa="login-email"]';
        this.passwordInput = '[data-qa="login-password"]';
        this.loginButton = '[data-qa="login-button"]';

        this.URL = "https://www.automationexercise.com/login";
    }

    visit() {
        cy.visit(this.URL);
    }

    fillEmail(email) {
        cy.get(this.emailInput).type(email);
    }

    fillPassword(password) {
        cy.get(this.passwordInput).type(password);
    }

    submit() {
        cy.get(this.loginButton).click();
    }
}

export default new signInPage();