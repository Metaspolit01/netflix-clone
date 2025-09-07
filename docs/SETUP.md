# Netflix Clone - Setup Guide

## 🔧 Local Development Setup

### Prerequisites
1. **Node.js and npm**
```bash
# Install Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```
# Verify installation
```bash
node --version
npm --version
```

2. **Docker**
```bash
# Install Docker
sudo apt-get update
sudo apt-get install docker.io
```
```bash
# Start and enable Docker
sudo systemctl start docker
sudo systemctl enable docker
```
```bash
# Add user to docker group
sudo usermod -aG docker $USER
```

3. **Azure CLI**
```bash
curl -sL https://aka.ms/InstallAzureCLIScript | sudo bash
```
4. **terraform**
```bash
https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli

#verify
terraform --version
```

5. **kubectl**
```bash
https://kubernetes.io/docs/tasks/tools/

#verify
kubectl --version
```


### Application Setup

1. **Clone Repository**
```bash
git clone https://github.com/Metaspolit01/devops-Netflix-clone.git
cd devops-Netflix-clone
```

2. **Environment Setup**
```bash
touch .env
cd .env
# Edit  TMDB API key=your api key
```

3. **Development Server**
```bash
npm install
npm run dev
```

## 🐳 Docker Development

1. **Build and Run**
```bash
docker-compose up --build
```

2. **Access Application**
- Open http://localhost:3000

## ☁️ Production Setup

### Azure Setup
```bash
# Login to Azure
az login
```


# Create AKS cluster
```bash
az aks create \
  --resource-group netflix-prod-rg \
  --name netflix-aks \
  --node-count 2 \
  --enable-managed-identity
```

# Get credentials
```bash
az aks get-credentials --resource-group netflix-prod-rg --name netflix-aks
```

or simply run terraform 
  #go to terraform directory
  ```bash
  cd terraform
```
  # intialize terraform 
  ```bash
  terraform init
```
# check terraform validation
  ```bash
terraform validate
```
  #pre checking befor terraform creation
  ```bash
terraform plan
```
  #run terraform script
```bash
  terraform apply
```  

### Kubernetes Deployment
```bash
# Apply configurations
kubectl apply -f k8s/
```

# Verify deployment
```bash
kubectl get pods
kubectl get svc
kubectl get ingress
```

## 🔍 Troubleshooting

### Common Issues

1. **Port Conflicts**
```bash
# Find process using port 3000
sudo lsof -i :3000
# Kill process
kill $(lsof -t -i:3000)
```

2. **Docker Issues**
```bash
# Reset Docker
docker system prune -a
```

3. **Kubernetes Issues**
```bash
# Check pod logs
kubectl logs <pod-name>

# Check events
kubectl get events
```

## 📚 Additional Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Azure Kubernetes Service](https://docs.microsoft.com/en-us/azure/aks/)
- [TMDB API Documentation](https://developers.themoviedb.org/3)
