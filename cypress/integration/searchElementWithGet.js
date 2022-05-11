describe('formas de encontrar un elemento',function(){
    it('buscar en el buscador',function(){
        cy.visit('http://automationpractice.com/index.php');
        //cy.get('.D-z').type('hola'); //Busqueda por clase
        cy.get('#search_query_top').type(' como te va'); //Busqueda por Id
        cy.get('[name="search_query"]').type(' me va muy bien'); //Busqueda por otra propiedad
        cy.get('[placeholder="Search"]').clear(); //Borra lo que esta escrito
    })
})

//cy.get('#para chequear un box').check();
//cy.get('#id_del_elemeto').select('price:Highest firsr'); filtra en el elemento lo que estamos enviando
//cy.get('#s0-62-9_incl_desc').check();
// cy.get('.yx-z').contains('Dresses');
//cy.get('#s0-62-9_incl_desc').uncheck();