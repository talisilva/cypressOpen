/// <reference types= "cypress" />

context('Funcionalidade Login', ()=>{

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        
    });

    
    

    it('Deve fazer login com sucesso', () =>{
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')


    })

    it('Deve exibir uma mensagem de e-mail desconhecido', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@test.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro' )
        

    })

    it('Deve exibir uma mensagem de erro ao inserir usuário ou senha inválidos', () => {
        cy.get('#username').type('aluno_eb@teste.com')
        cy.get('#password').type('teste@test.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.' )
        

    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@testww.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?' )
        

    })
})
