class RegisterPage {
  elements = {
    headerBtn:     () => cy.get('#signin2'),              // link de navbar "Sign up"
    userInput:     () => cy.get('#sign-username'),
    passwordInput: () => cy.get('#sign-password'),
    submitButton:  () => cy.get('#signInModal .btn-primary'),
  }
 
  signupHeaderBtn() {
    this.elements.headerBtn().click()
  }
 
  enterUserName(username) {
    this.elements.userInput().click().clear().type(username)
  }
 
  enterPassword(password) {
    this.elements.passwordInput().click().clear().type(password)
  }
 
  clickSubmit() {
    this.elements.submitButton().click()
  }
}
 
export default new RegisterPage()