Feature: User login on Swag Labs
  As a user of Swag Labs
  I want to authenticate with my credentials
  So that I can access the home page

  Background:
    Given the user is on the login page

  Scenario: Successful login with valid credentials
    When the user enters username "standard_user" and password "secret_sauce"
    Then the user lands on the home page

  Scenario: Failed login with wrong password
    When the user enters username "standard_user" and password "wrong_password"
    Then an error message "Username and password do not match any user in this service" is displayed

  Scenario: Required fields validation
    When the user enters username "" and password ""
    Then an error message "Username is required" is displayed

  Scenario: Login with a non existing user
    When the user enters username "ghost_user" and password "secret_sauce"
    Then an error message "Username and password do not match any user in this service" is displayed

  Scenario: Login with empty password
    When the user enters username "standard_user" and password ""
    Then an error message "Password is required" is displayed


