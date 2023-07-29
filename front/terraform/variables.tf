
variable "app_service_name" {
  description = "El nombre del App Service"
  type        = string
}

variable "docker_registry_server_url" {
  description = "La URL del servidor del registro de Docker"
  default     = "https://index.docker.io"
}