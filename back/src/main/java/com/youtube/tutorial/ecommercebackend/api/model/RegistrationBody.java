package com.youtube.tutorial.ecommercebackend.api.model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Getter;

/**
 * The information required to register a user.
 */
@Getter
public class RegistrationBody {


  @NotNull
  @NotBlank
  @Size(min=3, max=255)
  private String username;

  @NotNull
  @NotBlank
  @Email
  private String email;

  @NotNull
  @NotBlank
  @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$")
  @Size(min=6, max=32)
  private String password;

  @NotNull
  @NotBlank
  private String firstName;

  @NotNull
  @NotBlank
  private String lastName;


}
