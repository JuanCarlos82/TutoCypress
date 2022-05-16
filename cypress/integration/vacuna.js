describe('Busqueda paciente',function(){
    it('Busqueda con Dui',function(){
        cy.visit('https://registro.vacunacioncovid19.gob.sv/');
        cy.get('#user').type('02438653-3');
        cy.wait(2000);
        cy.get('#pass').type('Tontin82');
        cy.wait(2000);
        cy.get('#bt_send').click();
        cy.wait(2000);
        cy.get('.row > :nth-child(1) > .btn').click();
        cy.wait(2000);
        //cy.get('#dui').type('02438653-3');
        //cy.get('#bt_main1').click();
        const arreglo=["02438653-3","05189130-7", "04260058-7"]
        arreglo.forEach((idx,val)=>{
            cy.get('#dui').clear();  
            cy.get('#dui').type(idx);
            cy.get('#bt_main1').click();
            cy.wait(2000);
        })
    })
})