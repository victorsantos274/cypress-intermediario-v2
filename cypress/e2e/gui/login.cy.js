describe('lgin', () => {
it('successfully', () => {

  cy.login()
  cy.get('.qa-user-avatar').should('be.visible')
})
it.only('validação', function() {

  cy.visit('/users/sign')
})

} )