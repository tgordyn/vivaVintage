terraform {
  required_version = ">= 1.0"
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "3.65.0"
    }
  }
}


provider "azurerm" {
  features {}
}


resource "azurerm_linux_web_app" "app_service_vivavintage" {
  name                = var.app_service_name
  location            = "eastus"
  resource_group_name = "rg-nocountry"
  app_service_plan_id = "/subscriptions/276769ab-aeeb-473b-8765-a15ab1a9cf1c/resourceGroups/rg-nocountry/providers/Microsoft.Web/serverFarms/asp_vivavintage"

  site_config {

    always_on = true
    application_stack {
      docker_image     = "DOCKER|ovas04/back-vivavintage"
      docker_image_tag = "release-back"
    }
  }

  app_settings = {
    "WEBSITES_ENABLE_APP_SERVICE_STORAGE" = "false"
    "DOCKER_REGISTRY_SERVER_URL"          = "https://index.docker.io"
  }
}
