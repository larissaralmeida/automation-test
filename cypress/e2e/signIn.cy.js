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
        signInPage.fillEmail(userData.validUser.email);
        signInPage.fillPassword(userData.validUser.password);
        signInPage.submit();

        const username = userData.validUser.username;

        cy.contains('a', `Logged in as ${username}`).should('be.visible');

    });

    it.only('Não deve permitir login com credenciais inválidas', () => {

        signInPage.visit();
        signInPage.fillEmail(userData.invalidUser.email);
        signInPage.fillPassword(userData.invalidUser.password);
        signInPage.submit();

        

    });

});