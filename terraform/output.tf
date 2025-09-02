output "kube_config" {
  value     = azurerm_kubernetes_cluster.netflix.kube_config_raw  # Output kubeconfig
  sensitive = true                    
}

output "cluster_name" {
  value = azurerm_kubernetes_cluster.netflix.name  # Output cluster name
}

output "resource_group_name" {
  value = azurerm_resource_group.netflix.name      # Output resource group name
}