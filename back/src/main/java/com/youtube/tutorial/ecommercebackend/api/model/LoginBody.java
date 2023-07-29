package com.youtube.tutorial.ecommercebackend.api.model;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

/**
 * The body for the login requests.
 */
@Getter @Setter
public class LoginBody {


  @NotNull
  @NotBlank
  private String email;

  @NotNull
  @NotBlank
  private String password;

}
