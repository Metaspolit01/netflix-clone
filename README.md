# Netflix Clone

A modern Netflix clone built with Next.js, deployed on Azure Kubernetes Service (AKS), and utilizing Docker containers.

## 🚀 Quick Links
- [Setup Guide](./docs/SETUP.md)
- [Project Overview](./docs/PROJECT-OVERVIEW.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)

## ✨ Features
- Real-time movie data from TMDB API
- Responsive Netflix-like UI
- Docker containerization
- Kubernetes deployment
- CI/CD pipeline
- Production-grade configuration

## 🛠️ Tech Stack
- Next.js
- Docker
- Kubernetes (AKS)
- Azure Cloud
- TMDB API
- Terraform

## 📝 Prerequisites
- Node.js 20.x or later
- Docker
- Azure CLI
- kubectl
- Terraform

## 🔑 Environment Variables
```bash
NEXT_PUBLIC_TMDB_API_KEY=your_api_key
TMDB_API_KEY=your_api_key
```

## 📦 Quick Start
1. Clone the repository
```bash
git clone https://github.com/Metaspolit01/devops-Netflix-clone.git
cd devops-Netflix-clone
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```
or To Start production server
```bash
npm run build
npm run start
```

## 🐳 Docker Development
```bash
docker-compose up --build -d #to run in backgroud 
```

## ☁️ Production Deployment
See [Deployment Guide](./docs/DEPLOYMENT.md) for AKS deployment instructions.

## 📜 License
MIT License

## 👥 Contributing
Pull requests are welcome. For major changes, please open an issue first.
