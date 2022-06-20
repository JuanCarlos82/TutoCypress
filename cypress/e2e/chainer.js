describe('Escribir en busqueda varios strings',function(){
    it('vamos a escribir y limpiar',function(){
        cy.visit('https://www.6pm.com/');
        /*cy.get('[placeholder="Search 6pm.com"]').clear();
        cy.get('[placeholder="Search 6pm.com"]').type('Hola');
        cy.get('[placeholder="Search 6pm.com"]').clear();
        cy.get('[placeholder="Search 6pm.com"]').type(' que tal');*/
        cy.get('[placeholder="Search 6pm.com"]').clear().type('Hola').clear().type('que tal');
    })
})