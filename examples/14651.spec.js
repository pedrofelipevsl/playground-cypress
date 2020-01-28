describe("Bug#14651", () => {

    it("A div está responsiva?", () => {

        cy.viewport(1366,768);
        cy.visit("https://empregabilidade-ui.cronapp.io/#/instituicoes/unicuritiba");

        cy.wait(2000)

        cy.get("div.perfil-icon").first().click()

        cy.get("input[ng-model='perfil.login']").type("nucleo@nucleo.com")
        cy.get("input[ng-model='perfil.senha']").type("admin")
        cy.get("button[ng-click='validarLogin(perfil)']").click();

        cy.get("li:nth-child(6)").click()
        cy.get("tr.ng-scope > td:nth-child(5)").last().then(($unidade) =>{

            cy.wrap($unidade).should("have.css","width").and("match",/137px/)
        })

    })

})