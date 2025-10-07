Feature: Frontend - Register
 
  @Frontend @TC-1
  Scenario: Registro con credenciales válidas
    Given el usuario abre la web de Demo
    When el usuario hace click en boton sign up
    And se ingresa el usuario "random"
    And ingresa la contraseña nueva "Password123"
    And el usuario hace clic en el botón Sign up
   