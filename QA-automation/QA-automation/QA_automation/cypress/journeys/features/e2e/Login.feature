Feature: Frontend - Login

  @Frontend @TC-1 
  Scenario: Login con credenciales válidas
    Given el usuario abre la web de Practicas
    And el usuario hace click en boton log in
    When ingresa el nombre "dab#"
    And ingresa la contraseña "123"
    And el usuario hace clic en el botón ingresar
    Then el sistema muestra el mensaje "Welcome DanielaAndreaBarrios"
   