describe('prueba el login de tramites',function(){
    beforeEach(function(){
        cy.visit('https://tramites.goes.sigenesishost.com/');
    })
    afterEach(function(){
        cy.log("Test finalizado");
    })
    it('inicia sesion con usuario incorrecto',function(){
        //Con usuario incorrecto
        cy.get('#txtUsuario').type('juan');
        cy.get('#txtPass').type('test');
        const uno = cy.get('#btn_login').click();
        cy.wait(4000);
        console.log(uno);
        
    })
    it('inicia sesion con password incorrecto',function(){
        //Con password incorrecto
        cy.get('#txtUsuario').type('test');
        cy.get('#txtPass').type('juan');
        const dos =  cy.get('#btn_login').click();
        cy.wait(4000);
        console.log(dos);
       
    })
    it('inicia sesion correcto',function(){
        //Con password incorrecto
        cy.get('#txtUsuario').type('test');
        cy.get('#txtPass').type('test');
        cy.get('#btn_login').click();
    })
})