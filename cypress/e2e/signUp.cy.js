import signUpFirstPage from "../support/pages/signUpFirstPage";
import signUpFormPage from "../support/pages/signUpFormPage";

describe('Cadastro de novo usuário', () => {

    it('Deve realizar o cadastro com sucesso', () => {
        signUpFirstPage.visit();
        signUpFirstPage.fillUsername("test");
        signUpFirstPage.fillEmail("2343343@test.com");
        signUpFirstPage.submit();

        //Acessando a segunda página de cadastro

        signUpFormPage.selectGender('Mrs');
        signUpFormPage.fillFirstName('John');
        signUpFormPage.fillLastName('Doe');
        signUpFormPage.fillPassword('password123');

        
    });

});