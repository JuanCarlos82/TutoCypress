describe('Busqueda paciente',function(){
    it('Busqueda de registro',function(){
        cy.visit('https://vacunacioncovid19.gob.sv/');
        cy.get('#dui').type('02438653-3');
        cy.get('#dob').type('08-11-1982');
        cy.get('#bt_main').click();
        cy.get(':nth-child(4) > .qr-link').click();
        
    })
})