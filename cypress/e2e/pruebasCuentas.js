describe('Cuentas',function(){
    /*var a = 1+1;
    var b = 2;
    it('Vamos a ver que se sume bien',function(){
        expect(a==b).to.equal(true);
    });
    it('Vamos a ver que se reste bien',function(){
        expect(a-b).to.equal(0);
    })*/
    var a=1;
    it('vamos a ver una igualdad',function(){
        expect (1==1,"ambos terminos tienen que se iguales y no lo son").to.equal(true);
    })
    it('vamoa a ver que no sea una igualdad',function(){
        expect(1==2).to.equal(false);
    })
    it('vamos a ver que una resta este bien',function(){
        expect(1-1,"aca se espera un cero").to.equal(0);
    })
    it('vamos a ver que la resta no este bien',function(){
        expect(1-1).to.not.equal(2);
    })
    it('tiene que ser verdadero',function(){
        expect(2==2).to.be.true;
    })
    it('tiene que ser falso',function(){
        expect(2==1).to.be.false;
    })
    it('ver si la variable existe',function(){
        expect(a).to.exist;
    })
    it('es menor a 10',function(){
        expect(a).to.be.lessThan(10);
    })
    it('es mayor a 10',function(){
        expect(25).to.be.greaterThan(10);
    })
})