describe("Responsividade", () => {

    it("A div está responsiva no iPad Pro?", () => {
        cy.viewport("ipad-2")

        cy.visit("https://empregabilidade-ui.cronapp.io/#/empresas")

        cy.get("input[ng-model='perfil.login']").type("21333333444422");
        cy.get("input[ng-model='perfil.senha']").type("21333{enter}");

        cy.wait(3000)

        cy.visit("https://empregabilidade-ui.cronapp.io/#/empresas/cadastro")

        cy.get(".btn-controllers-align").last().then(($unidade) =>{

            cy.wrap($unidade).should("have.css","width").and("match",/137px/) // Esperado 137px, validar após correção
        })
    })
})