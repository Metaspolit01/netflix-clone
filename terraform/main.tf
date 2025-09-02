# Define required providers block
terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"    
      version = "~> 3.0"               
    }
  }
}

provider "azurerm" {
  features {}                         
}

# Create Azure Resource Group
resource "azurerm_resource_group" "netflix" {
  name     = "netflix-prod-rg"        # Name of the resource group
  location = "centralindia"           
}
# Create AKS Cluster
resource "azurerm_kubernetes_cluster" "netflix" {
  name                = "netflix-aks"  # Name of the AKS cluster
  location            = azurerm_resource_group.netflix.location  # Use same location as resource group
  resource_group_name = azurerm_resource_group.netflix.name     # Reference to resource group name
  dns_prefix         = "netflix-aks"   # DNS prefix for cluster

  # Configure the default node pool
  default_node_pool {
    name       = "default"            # Name of the node pool
    node_count = 2                    # Initial number of nodes
    vm_size    = "Standard_B2s"       
    
    enable_auto_scaling = true        # Enable cluster autoscaling
    min_count          = 2            
    max_count          = 6            
  }

  # Configure managed identity
  identity {
    type = "SystemAssigned"          # Use managed identity for authentication
  }

  # Configure networking
  network_profile {
    network_plugin = "kubenet"        # Use basic kubenet networking
    load_balancer_sku = "standard"    # Use standard load balancer
  }

  # Add tags
  tags = {
    Environment = "Production"        # Tag to identify environment
  }
}