describe('iniciar sesion en github',function(){
    it('iniciar sesion',function(){
        cy.visit('https://github.com/');
        cy.get('div.d-flex.flex-justify-between > .d-flex > .js-details-target > .octicon').click();
        cy.get('.mr-3 > .HeaderMenu-link').click();
        
    })
})