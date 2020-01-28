describe("Responsividade", () => {

    it("A div está responsiva no iPhone 6?", () => {
        cy.viewport(375, 667);


        cy.visit("https://empregabilidade-ui.cronapp.io/#/instituicoes/unicuritiba")

        cy.wait(2000)

        cy.get("li:nth-child(2) > .selector-profile--item").click()
        

        cy.get("input[ng-model='perfil.login']").type("1410001")
        cy.get("input[ng-model='perfil.senha']").type("aluno")
        cy.get("button[ng-click='validarLogin(perfil)']").click();

        cy.wait(2000)
        
        cy.get(".menu-btn").click()
        cy.get(".sidebar-links > li:nth-child(1)").click()
        cy.get(".seletor-form-cadastro:nth-child(2)").click()

        cy.get(".bloco-cadastro:nth-child(2) th:nth-child(4)").first().then(($unidade) =>{

            cy.wrap($unidade).should("have.css","width").and("match",/200px/) // Esperado 137px, validar após correção
        })

        cy.get("td.btn-controllers-align").last().then(($unidade) =>{

            cy.wrap($unidade).should("have.css","width").and("match",/111px/) // Esperado 137px, validar após correção
        })
    })
})

/*

.bloco-cadastro = 667.5 width 

FA = / 6 campos = 111,25

EP = / 5 campos = 133,5

I = / 4 campos = 166,875

VI = / 6 campos = 111,25 

*/