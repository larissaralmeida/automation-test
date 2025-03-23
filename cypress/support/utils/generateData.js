import { faker } from '@faker-js/faker';

// Função para gerar dados de usuários aleatórios

export const generateUserData = ()=> {
    return{
        username: faker.internet.username(),
        email: faker.internet.email(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        mobileNumber: faker.phone.number()
    }
}