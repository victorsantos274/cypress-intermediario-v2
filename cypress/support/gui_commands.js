Cypress.comands.add('login', (
user = cypress.env('user_name'),
password = cypress.env('user_password'),


) => {

    const login = () => {
        cy.visit('/users/sign')

        cy.get("[data-qa-selector='login_field']").type(user)

        cy.get("[data-qa-selector='sign_in_button']").click()
    }

    login()

})