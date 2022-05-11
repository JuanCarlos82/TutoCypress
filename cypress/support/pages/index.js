class indexPage{
    /*
    constructor(){
        this.searchInput = '#search_query_top';
        this.searchButton = '#searchbox > .btn';
    }*/

    search = (element) => {
        cy.fixture('index.json').then((locators)=>{
            cy.get(locators.searchInput).type(element);
            cy.get(locators.searchButton).click();
        })
        /*
        cy.get(this.searchInput).type(element);
        cy.get(this.searchButton).click();
        */
    }
}
export default new indexPage();