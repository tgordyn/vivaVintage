package com.youtube.tutorial.ecommercebackend.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

/**
 * A product available for purchasing.
 */
@Getter
@Setter
@Entity
@Table(name = "product")
public class Product {


  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id", nullable = false)
  private Long id;

  @Column(name = "name", nullable = false, unique = true)
  private String name;

  @Column(name = "image1")
  private String image1;

  @Column(name = "image2")
  private String image2;

  @Column(name = "image3")
  private String image3;

  @Column(name = "category")
  private String category;

  @Column(name = "clothing")
  private String clothing;

  @Column(name = "description")
  private String description;

  @Column(name = "price", nullable = false)
  private Double price;

  @Column(name = "size")
  private String size;

  @Column(name = "star")
  private int star;

  @OneToOne(mappedBy = "product", cascade = CascadeType.REMOVE, optional = false, orphanRemoval = true)
  private Inventory inventory;


}