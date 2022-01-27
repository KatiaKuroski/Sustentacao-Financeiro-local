
            describe("Home Page Azul", () => {
            it("Selecionando o Cliente e a Parcela Pendente", () => {
                cy.viewport(1920,1080)
                cy.visit("https://wwwdsvn2.azulseguros.com.br/");
               
                cy.get('#onetrust-accept-btn-handler').click();
                cy.get('#loginDropdown > .nav-link__label').click();
                cy.get('.btn-login-cliente').click();
                cy.get('#login-cliente__input').focus().type('295.200.518-48');
                cy.get('.login-cliente > .login-form > .has-show-hide-password > .form-control').focus().type('Nov@1234');
                cy.get('.login-cliente > .login-form > .btn').click();
                cy.get('.list-icons',{timeout:5000}).scrollIntoView();
               // cy.get('[data-gtm-name="relacao-de-parcelas]').click();
                cy.get(':nth-child(7) > :nth-child(6) > .icon-resolva-item > a > .icon-resolva-text').click();
               
                
            cy.log ("gerar boleto");
            cy.get('img[title="Gerar Boleto"]', {timeout:5000}).first().click();
            cy.get(':nth-child(5) > :nth-child(5) > .ui-state-default').click();
            cy.get('.block-ui-container-inner > .base-modal > .covid19-container > .covid19-notification > .covid19-notification-message > .popup-actions > .bt-options > #buttonDisabledCovid').click();
            //selecione as opções
            cy.get('.block-ui-container-inner > :nth-child(1) > .content-modal-boleto > .form-boleto > .popup-actions > .actions-width > :nth-child(1) > .left-opt > #copyCode').click();
            cy.get('.block-ui-container-inner > :nth-child(1) > .content-modal-boleto > .form-boleto > .popup-actions > .actions-width > :nth-child(1) > :nth-child(2) > #imprimirBoleto').click();
            cy.get('.block-ui-container-inner > :nth-child(1) > .content-modal-boleto > .form-boleto > .popup-actions > .actions-width > :nth-child(2) > .left-opt > #enviarPorEmail').click();
            cy.get('.block-ui-container-inner > :nth-child(1) > .content-modal-boleto > .form-boleto > .popup-actions > .input-options > .left-opt > .emailBoleto > #emailBoleto').type("katiakuroski.opentec@azulseguros.com.br");
            cy.get('.block-ui-container-inner > :nth-child(1) > .content-modal-boleto > .form-boleto > .popup-actions > .actions-width > :nth-child(2) > :nth-child(2) > #receberSMS').click();
            cy.get('.block-ui-container-inner > :nth-child(1) > .content-modal-boleto > .form-boleto > .popup-actions > .input-options > :nth-child(2) > .celularBoleto > #celularBoleto').type("41996059283");
            cy.get('.block-ui-container-inner > :nth-child(1) > .content-modal-boleto > .form-boleto > .popup-actions > .bt-options > .bt-primary').click();
            cy.get('.block-ui-container-inner > :nth-child(1) > .content-modal-boleto > .result-sendform > .bt-options > #proximaParcela').click();
          


            cy.get('.nav-link.d-none > .nav-link > span').click();
        });
    //      it("Selecionando o Cliente e a Parcela a Vencer - Boleto", () => {
    //          cy.visit("https://wwwdsvn2.azulseguros.com.br/");
           
    //          cy.get('#onetrust-accept-btn-handler').click();
    //          cy.get('#loginDropdown > .nav-link__label').click();
    //          cy.get('.btn-login-cliente').click();
    //          cy.get('#login-cliente__input').focus().type('415.298.200-49');
    //          cy.get('.login-cliente > .login-form > .has-show-hide-password > .form-control').focus().type('Nov@1234');
    //          cy.get('.login-cliente > .login-form > .btn').click();
    //         cy.get('.list-icons',{timeout:5000}).scrollIntoView();
    //         cy.get('[data-gtm-name="relacao-de-parcelas').click();
           
            
    //    cy.log ("gerar boleto");
    //     cy.get('img[title="Gerar Boleto"]', {timeout:40000}).first().click();
    //   selecione as opções
    //     cy.get('.block-ui-container-inner > :nth-child(1) > .content-modal-boleto > .form-boleto > .popup-actions > .actions-width > :nth-child(1) > .left-opt > #copyCode').click();
    //     cy.get('.block-ui-container-inner > :nth-child(1) > .content-modal-boleto > .form-boleto > .popup-actions > .actions-width > :nth-child(1) > :nth-child(2) > #imprimirBoleto').click();
    //     cy.get('.block-ui-container-inner > :nth-child(1) > .content-modal-boleto > .form-boleto > .popup-actions > .actions-width > :nth-child(2) > .left-opt > #enviarPorEmail').click();
    //     cy.get('.block-ui-container-inner > :nth-child(1) > .content-modal-boleto > .form-boleto > .popup-actions > .input-options > .left-opt > .emailBoleto > #emailBoleto').type("katiakuroski.opentec@azulseguros.com.br");
    //     cy.get('.block-ui-container-inner > :nth-child(1) > .content-modal-boleto > .form-boleto > .popup-actions > .actions-width > :nth-child(2) > :nth-child(2) > #receberSMS').click();
    //     cy.get('.block-ui-container-inner > :nth-child(1) > .content-modal-boleto > .form-boleto > .popup-actions > .input-options > :nth-child(2) > .celularBoleto > #celularBoleto').type("41996059283");
    //     cy.get('.block-ui-container-inner > :nth-child(1) > .content-modal-boleto > .form-boleto > .popup-actions > .bt-options > .bt-primary').click();
       
    //    cy.get('.block-ui-container-inner > :nth-child(1) > .content-modal-boleto > .result-sendform > .bt-options > #proximaParcela').click();
    //    cy.get('.block-ui-container-inner > :nth-child(1) > .content-modal-boleto > .form-boleto > .popup-actions > .bt-options > .bt-primary').click();
    //    cy.get('.nav-link.d-none > .nav-link > span').click();
  //  });
});