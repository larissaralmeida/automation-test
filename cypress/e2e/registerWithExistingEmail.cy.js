import signUpFirstPage from "../support/pages/signUpFirstPage";

describe('Cadastro com e-mail já existente', () => {

    let userData;

    beforeEach(function () {
       cy.fixture('user').then((data) => {
          userData = data;
       });
    });

    it('Não deve permitir o cadastro com e-mail já existente', () => {

        //Garante que os dados estejam carregados antes de continuar os testes
        cy.wrap(userData).should('exist');

        signUpFirstPage.visit();
        signUpFirstPage.fillUsername(userData.validUser.username);
        signUpFirstPage.fillEmail(userData.validUser.email);
        signUpFirstPage.submit();

        signUpFirstPage.errorMessage.should('be.visible');


    });

});