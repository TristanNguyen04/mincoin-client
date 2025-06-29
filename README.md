#  MinCoin Calculator - Frontend Client

A beautiful, modern React frontend client for the MinCoin Calculator application. This client provides an intuitive user interface for calculating optimal coin combinations, connecting to the [MinCoin Server](https://github.com/TristanNguyen04/mincoin-server) backend API.

![MinCoin Calculator](https://img.shields.io/badge/React-19.1.0-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.0.0-purple?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?logo=tailwind-css)

## 🌐 Live Demo

**Try it out now**: [MinCoin Calculator](https://coin-frontend-demo.web.app/)

## 🔗 Backend Integration

This frontend client is designed to work with the **MinCoin Server** backend:
- **Backend Repository**: [mincoin-server](https://github.com/TristanNguyen04/mincoin-server)
- **Live API**: https://dropwizard-service-1033413749204.us-central1.run.app
- **Backend Tech Stack**: Java 17, Dropwizard, Google Cloud Run
- **Frontend Deployment**: Firebase Hosting

## ✨ Features

- **🎯 Smart Coin Calculation**: Find the most efficient combination of coins for any target amount
- **🎨 Beautiful UI**: Modern gradient design with smooth animations and responsive layout
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **⚡ Real-time Validation**: Instant feedback on form inputs with helpful error messages
- **🔄 Dynamic Denominations**: Select from 12 different coin denominations (1¢ to $1000)
- **🚀 Fast Performance**: Built with Vite for lightning-fast development and builds
- **🔗 API Integration**: Seamless connection to the MinCoin Server backend

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TristanNguyen04/mincoin-client
   cd mincoin-client/client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🏗️ Building for Production

### Local Build
```bash
npm run build
```

The built files will be in the `dist/` directory.

### Docker Build
```bash
# Build the Docker image
docker build -t mincoin-calculator .

# Run the container
docker run -p 3000:80 mincoin-calculator
```

Then visit `http://localhost:3000`

## 🐳 Docker Instructions

### Building the Container

1. **Navigate to the client directory**
   ```bash
   cd client
   ```

2. **Build the Docker image**
   ```bash
   docker build -t mincoin-calculator:latest .
   ```

3. **Verify the image was created**
   ```bash
   docker images | grep mincoin-calculator
   ```

### Running the Container

#### Custom Port
```bash
docker run -d -p 3000:80 --name mincoin-app mincoin-calculator:latest
```

#### With Volume Mount (for development)
```bash
docker run -d -p 3000:80 -v $(pwd)/src:/app/src --name mincoin-app mincoin-calculator:latest
```

### Container Management

```bash
# Stop the container
docker stop mincoin-app

# Start the container
docker start mincoin-app

# Remove the container
docker rm mincoin-app

# View container logs
docker logs mincoin-app

# Access container shell
docker exec -it mincoin-app sh
```

### Docker Compose (Optional)

Create a `docker-compose.yml` file:

```yaml
version: '3.8'
services:
  mincoin-calculator:
    build: .
    ports:
      - "3000:80"
    container_name: mincoin-app
    restart: unless-stopped
```

Then run:
```bash
docker-compose up -d
```

## 🎯 How It Works

1. **Input Target Amount**: Enter the amount you want to reach (up to $10,000)
2. **Select Denominations**: Choose from available coin denominations (1¢, 5¢, 10¢, 25¢, 50¢, $1, $2, $5, $10, $50, $100, $1000)
3. **Calculate**: The frontend sends your request to the MinCoin Server backend API
4. **Get Results**: View the optimal combination of coins calculated by the backend

## 🛠️ Technology Stack

### Frontend
- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.0
- **Language**: TypeScript 5.8.3
- **Styling**: Tailwind CSS 3.4.17
- **HTTP Client**: Axios 1.10.0
- **Form Handling**: React Hook Form 7.59.0
- **Container**: Nginx Alpine
- **Node Version**: 20-alpine

### Backend Integration
- **Backend**: [MinCoin Server](https://github.com/TristanNguyen04/mincoin-server)
- **API Protocol**: RESTful JSON
- **Deployment**: Google Cloud Run

## 📁 Project Structure
```
📦 src/
├─ components/ # React components
│  ├─ CoinForm.tsx # Main form component
│  ├─ ResultDisplay.tsx # Results display
│  ├─ ErrorDisplay.tsx # Error handling
│  └─ LoadingSpanner.tsx # Loading animation
├─ types/
│  └─ api.ts # API interfaces
├─ api.ts # API client functions
├─ App.tsx # Main application component
└─ main.tsx # Application entry point
```
©generated by [Project Tree Generator](https://woochanleee.github.io/project-tree-generator)

##  Configuration

The application connects to the MinCoin Server backend API at:

**Production API**: https://dropwizard-service-1033413749204.us-central1.run.app

To change the API endpoint, modify the `BASE_URL` in `src/api.ts`.

### Local Development
For local development, you can:
1. Clone and run the [MinCoin Server](https://github.com/TristanNguyen04/mincoin-server) locally
2. Update the `BASE_URL` in `src/api.ts` to point to your local server (e.g., `http://localhost:8080`)

## 🎯 Testing

```bash
# Run linting
npm run lint

# Type checking
npm run build
```

## 📝 API Documentation

This frontend client communicates with the MinCoin Server backend API.

### Request Format
```typescript
interface CoinRequest {
  targetAmount: number;    // Target amount to reach (0.01 - 10,000.00)
  denominations: number[]; // Available coin denominations
}
```

### Response Format
```typescript
type CoinResponse = number[]; // Array of coin counts for each denomination
```

### Supported Denominations
- 0.01, 0.05, 0.10, 0.20, 0.50
- 1.00, 2.00, 5.00, 10.00, 50.00, 100.00, 1000.00

For complete API documentation, see the [MinCoin Server repository](https://github.com/TristanNguyen04/mincoin-server).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🆘 Support

If you encounter any issues:

1. Check the browser console for errors
2. Verify the MinCoin Server backend API is running
3. Ensure all dependencies are installed
4. Check the Docker logs if running in container
5. Review the [MinCoin Server documentation](https://github.com/TristanNguyen04/mincoin-server) for backend issues

---

**Frontend Client for MinCoin Calculator - Happy calculating! 🪙✨**