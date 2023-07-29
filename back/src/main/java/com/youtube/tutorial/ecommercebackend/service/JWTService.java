package com.youtube.tutorial.ecommercebackend.service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.youtube.tutorial.ecommercebackend.model.LocalUser;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Date;

/**
 * Service for handling JWTs for user authentication.
 */
@Service
public class JWTService {

  @Value("${jwt.algorithm.key}")
  private String algorithmKey;

  @Value("${jwt.issuer}")
  private String issuer;

  @Value("${jwt.expiryInSeconds}")
  private int expiryInSeconds;

  private Algorithm algorithm;

  private static final String USERNAME_KEY = "USERNAME";

  /**
   * Post construction method.
   */
  @PostConstruct
  public void postConstruct() {
    algorithm = Algorithm.HMAC256(algorithmKey);
  }

  /**
   * Generates a JWT based on the given user.
   * @param user The user to generate for.
   * @return The JWT.
   */
  public String generateJWT(LocalUser user) {
    return JWT.create()
        .withClaim(USERNAME_KEY, user.getUsername())
        .withExpiresAt(new Date(System.currentTimeMillis() + (1000 * expiryInSeconds)))
        .withIssuer(issuer)
        .sign(algorithm);
  }

  /**
   * Gets the username out of a given JWT.
   * @param token The JWT to decode.
   * @return The username stored inside.
   */
  public String getUsername(String token) {
    return JWT.decode(token).getClaim(USERNAME_KEY).asString();
  }

}
