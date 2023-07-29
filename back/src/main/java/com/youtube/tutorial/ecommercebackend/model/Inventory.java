package com.youtube.tutorial.ecommercebackend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

/**
 * Inventory of a product that available for purchase.
 */
@Getter
@Setter
@Entity
@Table(name = "inventory")
public class Inventory {


  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id", nullable = false)
  private Long id;

  @JsonIgnore
  @OneToOne(optional = false, orphanRemoval = true)
  @JoinColumn(name = "product_id", nullable = false, unique = true)
  private Product product;

  @Column(name = "quantity", nullable = false)
  private Integer quantity;



}