describe('Ir a diferentes secciones',function(){
    beforeEach(function(){
        cy.visit('http://automationpractice.com/index.php');
    })
    it('ir a seccion en especifico',function(){
        cy.get('[class=sf-with-ul]').first().click();
    })
    it('ir a la seccion Dresses',function(){
        cy.get('[class=sf-with-ul]').eq(3).click();
    })
})