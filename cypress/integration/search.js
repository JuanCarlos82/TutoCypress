import indexPage from '../support/pages/index';
import articlesPage from '../support/pages/articles';

describe('search test cases',function(){
    before(function(){
        cy.log("Ejecutando precondiciones a las pruebas");
    })
    after(function(){
        cy.log("Ejecutando todas las postcondiciones a las pruebas");
    })
    beforeEach(function(){
        cy.visit('http://automationpractice.com/index.php');
    })
    afterEach(function(){
        cy.log("Poniendo datos en su estado original");
    })
    it('search Dresses',function(){  
        indexPage.search('dress');
        cy.logSpecFormat('Searching for dresses');
        articlesPage.verifyArticle('"dress"');
        //cy.get('#search_query_top').type('dress');
        //cy.get('#searchbox > .btn').click();
        //cy.get('.lighter').contains('"dress"');  
    })
    it('search Hat',function(){ 
        indexPage.search('hat');
        articlesPage.verifyArticle('"hat"');
        cy.get(':nth-child(1) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click();
       
        //cy.get('#search_query_top').type('hat');
        //cy.get('#searchbox > .btn').click();
        //cy.get('.lighter').contains('"hat"');
    })
})

