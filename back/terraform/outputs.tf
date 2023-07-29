output "app_service_default_hostname" {
  description = "La URL del App Service desplegado"
  value       = azurerm_app_service.app_service_vivavintage.default_site_hostname
}