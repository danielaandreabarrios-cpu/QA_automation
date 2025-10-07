import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import RegisterPage from '../../../pages/RegisterPage';
import { faker } from '@faker-js/faker';

const envKey = Cypress.env('ENV') || 'DEV'
const cfg = () => {
  const v = Cypress.env(envKey)
  if (!v) throw new Error(`ENV='${envKey}' no encontrado en cypress.env.json`)
  return v
}
 
Given('el usuario abre la web de Demo', () => {
  cy.visit(cfg().url) 
})
 
When('el usuario hace click en boton sign up', () => {
  RegisterPage.signupHeaderBtn()
  cy.get('#signInModal').should('be.visible').and('have.class', 'show')
})
 
When('se ingresa el usuario {string}', (usuario) => {
  const u = usuario.toLowerCase() === 'random'
    ? `auto_${faker.string.alphanumeric(8).toLowerCase()}_${Date.now()}`
    : usuario
  cy.wrap(u).as('signupUser')

  cy.get('#sign-username').clear().type(u, { delay: 15 }).should('have.value', u)
})
 
When('ingresa la contraseña nueva {string}', (password) => {
  const p = password.toLowerCase() === 'random'
    ? `Pwd_${faker.string.alphanumeric(10)}!`
    : password
  cy.wrap(p).as('signupPass')
 
  cy.get('#sign-password').clear().type(p, { delay: 15 }).should('have.value', p)
})
 
When('el usuario hace clic en el botón Sign up', () => {
  cy.window().then((win) => {
    cy.stub(win, 'alert').as('signupAlert')
  })
 
  cy.get('#signInModal .btn-primary').click()
})