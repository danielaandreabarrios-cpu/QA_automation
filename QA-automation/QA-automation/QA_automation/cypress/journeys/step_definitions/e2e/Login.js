import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage  from '../../../pages/LoginPage';
const login = new LoginPage();

// Obtenemos el entorno actual de Cypress
// Esto nos permite usar diferentes configuraciones según el entorno (TST, STG, etc.)
const envi = Cypress.env('ENV');
// Obtenemos la URL base de la aplicación según el entorno
const url = Cypress.env(`${envi}`).url;


Given("el usuario abre la web de Practicas", function () {
    // Visitamos la URL de la aplicación
    cy.visit(`${url}`)
});
Given("el usuario hace click en boton log in", function () {
    // Hacemos clic en el botón de login para abrir el formulario de inicio de sesión
    login.clickHeaderLogin();
});
When("ingresa el nombre {string}", function (username) {
    // Llenamos el campo de usuario con el valor proporcionado
    login.typeUsername(username);
});

When("ingresa la contraseña {string}", function (password) {
    // Llenamos el campo de contraseña con el valor proporcionado
    login.typePassword(password);
});

When("el usuario hace clic en el botón ingresar", function () {
    // Hacemos clic en el botón de ingresar
    login.clickLogin();
});

Then("el sistema muestra el mensaje {string}", function (expectedError) {
    // Verificamos que el mensaje de error mostrado sea el esperado
    login.welcomeMessage().should('be.visible');
});
