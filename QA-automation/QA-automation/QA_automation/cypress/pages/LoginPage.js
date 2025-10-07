class LoginPage {
    elements = {
      loginHeader: () => cy.get('#login2'),
      usernameInput: () => cy.get("#loginusername"),
      passwordInput: () => cy.get("#loginpassword"),
      loginBtn: () => cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'),
      WelcomeText: () => cy.get('#nameofuser'),
    };

    clickHeaderLogin() {
      this.elements.loginHeader().click();
    }
    typeUsername(username) {
      this.elements.usernameInput().type(username);
    }
  
    typePassword(password) {
      this.elements.passwordInput().type(password);
    }
  
    clickLogin() {
      this.elements.loginBtn().click();
    }

    welcomeMessage() {
      return this.elements.WelcomeText();
    }
}
  
export default LoginPage;