import signInPage from "../support/pages/signInPage";

describe("Login de usuário", () => {

    let userData;

    beforeEach(function () {
        cy.fixture('user').then((data) => {
            userData = data;
        });
    });

    it('Realizar login com sucesso utilizando credenciais válidas', () => {

        //Garante que os dados estejam carregados antes de continuar o teste
        cy.wrap(userData).should('exist');

        signInPage.visit();
        signInPage.fillEmail(userData.email);
        signInPage.fillPassword(userData.password);
        signInPage.submit();

        const username = userData.username;

        cy.contains('a', `Logged in as ${username}`).should('be.visible');

    });

});