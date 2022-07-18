/// <reference types= "cypress" />



describe('Selecionar um produto', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });
    
    it('Deve selecionar um produto', () => {

        var quantidade = 10

        cy.get('[class="product-block grid"]').eq(6).click()
        cy.get('.button-variable-item-M').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Argus All-Weather Tank” foram adicionados no seu carrinho.' )





        
       
    });
    

});