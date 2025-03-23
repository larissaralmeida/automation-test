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
        signUpFormPage.fillPassword('password123');
        signUpFormPage.selectBirthDate('2', '1', '1994');
        signUpFormPage.fillFirstName('John');
        signUpFormPage.fillLastName('Doe');
        signUpFormPage.fillAddress("Avenida 2");
        signUpFormPage.fillCountry("United States");
        signUpFormPage.fillState("California");
        signUpFormPage.fillCity("Los Angeles");
        signUpFormPage.fillZipCode("51130550");
        signUpFormPage.fillMobileNumber("9999999999");

    });

});