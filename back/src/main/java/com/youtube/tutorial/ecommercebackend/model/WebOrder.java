package com.youtube.tutorial.ecommercebackend.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

/**
 * Order generated from the website.
 */
@Getter
@Setter
@Entity
@Table(name = "web_order")
public class WebOrder {


  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id", nullable = false)
  private Long id;

  @ManyToOne(optional = false)
  @JoinColumn(name = "user_id", nullable = false)
  private LocalUser user;

  @ManyToOne(optional = false)
  @JoinColumn(name = "address_id", nullable = false)
  private Address address;

  @OneToMany(mappedBy = "order", cascade = CascadeType.REMOVE, orphanRemoval = true)
  private List<WebOrderQuantities> quantities = new ArrayList<>();



}