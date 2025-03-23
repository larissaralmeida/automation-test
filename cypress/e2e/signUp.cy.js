import signUpFirstPage from "../support/pages/signUpFirstPage";
import signUpFormPage from "../support/pages/signUpFormPage";
import { generateUserData } from "../support/utils/generateData";

describe('Cadastro de novo usuário', () => {

    it('Deve realizar o cadastro com sucesso', () => {

        const userData = generateUserData();

        signUpFirstPage.visit();
        signUpFirstPage.fillUsername(userData.username);
        signUpFirstPage.fillEmail(userData.email);
        signUpFirstPage.submit();

        //Acessando a segunda página de cadastro

        signUpFormPage.selectGender('Mrs');
        signUpFormPage.fillPassword('password123');
        signUpFormPage.selectBirthDate('2', '1', '1994');
        signUpFormPage.fillFirstName(userData.firstName);
        signUpFormPage.fillLastName(userData.lastName);
        signUpFormPage.fillAddress("Avenida 2");
        signUpFormPage.fillCountry("United States");
        signUpFormPage.fillState("California");
        signUpFormPage.fillCity("Los Angeles");
        signUpFormPage.fillZipCode("51130550");
        signUpFormPage.fillMobileNumber(userData.mobileNumber);
        signUpFormPage.submitForm();

        cy.url().should('include', '/account_created');

    });

});