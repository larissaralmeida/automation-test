class signInPage {

    get url() {
        return "https://www.automationexercise.com/login";
    }
    get emailInput() {
        return cy.get('[data-qa="login-email"]');
    }
    get passwordInput() {
        return cy.get('[data-qa="login-password"]');
    }
    get loginButton() {
        return cy.get('[data-qa="login-button"]');
    }
    get errorMessage() {
        return cy.contains('p', 'Your email or password is incorrect!');
    }


    visit() {
        cy.visit(this.url);
    }

    fillEmail(email) {
        this.emailInput.type(email);
    }

    fillPassword(password) {
        this.passwordInput.type(password);
    }

    submit() {
        this.loginButton.click();
    }

}

export default new signInPage();