#  MinCoin Calculator Project

A complete solution for calculating minimum coin combinations with a modern React frontend and robust backend API.

## 📦 Project Structure
mincoin-client/
├── client/ # React/Vite frontend application
│ ├── src/ # Source code
│ ├── public/ # Static assets
│ ├── Dockerfile # Container configuration
│ └── README.md # Frontend documentation
└── README.md # This file

## 🚀 Quick Start

### Frontend (Client)

1. **Navigate to client directory**
   ```bash
   cd client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Visit `http://localhost:5173`

### Docker Deployment

1. **Build the container**
   ```bash
   cd client
   docker build -t mincoin-calculator .
   ```

2. **Run the container**
   ```bash
   docker run -d -p 8080:80 --name mincoin-app mincoin-calculator
   ```

3. **Access the application**
   Visit `http://localhost:8080`

## 🎯 Features

- Calculate minimum coins for any target amount
- Beautiful, responsive UI
- Real-time validation
- Docker containerization
- Production-ready build

---

For detailed instructions, see the [client README](./client/README.md).