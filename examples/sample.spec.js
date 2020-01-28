describe('3lines website home page', () => {
    beforeEach(() => {
        cy.visit('https://3lines.io/')
    })

    it('contains "3lines" in the title', () => {
        cy.title().should('contain', '3Lines')
    })

    it('has a visible logo picture', () => {
        cy.get('.wrap-pic1').should('be.visible')
    })

    describe('with an iPhone 5s 320x568 viewport', () => {
        beforeEach(() => {
            cy.viewport(320, 568)
        })

        it('has a visible mobile profile picture', () => {
            cy.get('.wrap-pic1').should('be.visible')
        })
    })
})