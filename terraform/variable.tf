variable "environment" {
  description = "Environment name"     # Description of the variable
  type        = string                # Variable type
  default     = "production"          # Default value if not specified
}

variable "location" {
  description = "Azure region"
  type        = string          
  default     = "centralindia"        
}