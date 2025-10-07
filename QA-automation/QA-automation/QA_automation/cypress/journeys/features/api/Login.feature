Feature: API - Login

  @API @Example @TC-1 
  Scenario: Login con credenciales válidas
    Given el usuario tiene acceso a la API de login
    And el usuario envia la solicitud de login con credenciales validas
    Then el sistema responde con un código de estado 200
    And el sistema devuelve un token de autenticacion

    @API @Example @TC-1 
  Scenario: Login con credenciales inválidas
    Given el usuario tiene acceso a la API de login
    And el usuario envia la solicitud de login con credenciales invalidas
    Then el sistema responde con un código de estado 400
    And el sistema devuelve un error de autenticacion