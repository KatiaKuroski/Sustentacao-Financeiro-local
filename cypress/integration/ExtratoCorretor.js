// describe("Home Page Azul", () => {
//     it("Fluxo de acesso ao Corretor", () => {
//         cy.visit("https://wwwdsvn2.azulseguros.com.br/");
       
//         cy.get('#loginDropdown > .nav-link__label').click();
//         cy.get('.btn-login-corretor').click();
//         cy.get('#login-corretor__input').focus().type("100584");
//         cy.get('.login-corretor > .login-form > .has-show-hide-password > .form-control').focus().type('Nov@1234');
//         cy.get('.login-corretor > .login-form > .btn').click();
//         cy.get('#menu-mobile > .menu-mobile').click();
//         cy.get(':nth-child(7) > :nth-child(1) > :nth-child(1) > :nth-child(1)').click();
//         cy.get('#seta6').click();
//         cy.get('#collapse_6 > .pl-4 > :nth-child(3)').should('contain', 'Extrato de Comissões');

        
//   });  
//  }); 


 describe("Home Page Azul", () => {
    it("Perfil Atendimento para espelhamento", () => {
        cy.visit("https://wwwdsvn2.azulseguros.com.br/");
        cy.get('#onetrust-accept-btn-handler').click();
        cy.get('#loginDropdown > .nav-link__label').click();
        cy.get('.btn-login-producao').click();
        cy.get('#login-producao__input').type("dccomz08");
        cy.get('.login-producao > .login-form > .has-show-hide-password > .form-control').focus().type('Nov@12345');   
        cy.get('.login-producao > .login-form > .btn').click(); 
        cy.get(':nth-child(13) > .thickbox').click(); 
         
        //cy.get('#iFramePerfil').should('contain', 'Extrato de Comissões');click();
    });  
  }); 
    //    describe("Corretor", () => {
    //    it("Extrato do corretor", () => {
    //     cy.visit("https://dashboarddsv.azulseguros.com.br/extrato-comissao/#/acesso-restrito/extrato-comissoes/32");
    //     cy.get('.senhaRestrita').type('172e1cb3');