# Ajackus Task

A modern React application built with [Vite](https://vitejs.dev/) for fast and efficient development.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Building the Project](#building-the-project)
- [Troubleshooting](#troubleshooting)

---

## Overview
This project demonstrates a Vite-powered React application. Vite offers an enhanced development experience with lightning-fast hot module replacement (HMR), optimized builds, and minimal configuration.

---

## Features
- ⚡️ Blazing-fast development with Vite
- 🌟 React for building interactive user interfaces
- 📦 Efficient production builds
- 🔄 Hot Module Replacement (HMR) for instant updates

---

## Prerequisites

### Node.js
Ensure you have **Node.js** installed on your system. This project requires **Node.js version 18.0.0 or higher**.

#### Check Node.js Version
Run the following command in your terminal or command prompt to check your Node.js version:
```bash
node --version
```

#### Installing Node.js
If Node.js is not installed or the version is below 18.0.0, follow the instructions below:

##### Windows
1. Go to the [Node.js official website](https://nodejs.org/).
2. Download the **LTS version** (Long-Term Support).
3. Run the installer and follow the installation steps.
4. Verify the installation:
   ```bash
   node --version
   npm --version
   ```

##### Linux
1. Open your terminal.
2. Use the following commands to install Node.js via a package manager:
   - **Ubuntu/Debian-based distributions**:
     ```bash
     sudo apt update
     sudo apt install -y curl
     curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
     sudo apt install -y nodejs
     ```
   - **Fedora**:
     ```bash
     sudo dnf module enable nodejs:18
     sudo dnf install -y nodejs
     ```
3. Verify the installation:
   ```bash
   node --version
   npm --version
   ```

##### macOS
1. Install Node.js via [Homebrew](https://brew.sh/):
   ```bash
   brew install node@18
   ```
2. Verify the installation:
   ```bash
   node --version
   npm --version
   ```

---

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## Running the Project
To start the development server, run:
```bash
npm run dev
```

The app will be accessible at [http://localhost:5173](http://localhost:5173).

---

## Building the Project
To create an optimized production build, run:
```bash
npm run build
```

The output will be in the `dist` directory.

---

## Troubleshooting

### Node.js Version Errors
If you encounter errors related to the Node.js version:
1. Ensure you are using **Node.js 18.0.0 or higher**.
2. Use a version manager like [nvm](https://github.com/nvm-sh/nvm) to manage multiple Node.js versions.

#### Install nvm (Node Version Manager) on Linux/macOS:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
source ~/.bashrc
nvm install 18
nvm use 18
```

#### Install nvm on Windows:
Use [nvm-windows](https://github.com/coreybutler/nvm-windows).

---
You can replace placeholders like `your-username` and `your-repo-name` with the actual repository details.
