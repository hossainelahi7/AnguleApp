describe('My First Test', () => {
    it('Goto Home page', () => {
        cy.visit('http://localhost:4200')
        cy.contains('Login')
    })
    it('Goto Welcome Page', () => {
        cy.visit('http://localhost:4200/welcome')
        cy.contains('Hossain')
    })
})
