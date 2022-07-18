/// <reference types= "cypress" />


var faker = require('faker-br');
const Faker = require('faker-br/lib');




describe('Funcionalidade Pré cadastro', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        
    });


    it('Deve cadastrar um novo usuário', () => {

        let emailFaker = faker.internet.email()
        let senhaFaker = faker.internet.password()
        
        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type(senhaFaker)
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.name.firstName())
        cy.get('#account_last_name').type(faker.name.lastName())
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')


        
    });

});