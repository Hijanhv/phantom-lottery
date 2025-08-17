# 🎰 Phantom Lottery - Solana dApp

*A lottery dapp made with love for my friend* ❤️

A decentralized lottery application built on the Solana blockchain using Phantom wallet integration.

## ✨ Features

- 🔗 **Phantom Wallet Integration** - Seamless connection with Phantom wallet
- 🎲 **Lottery System** - Fair and transparent lottery mechanism on Solana
- 💎 **Modern UI** - Beautiful, responsive design with Tailwind CSS
- ⚡ **Fast Transactions** - Powered by Solana's high-speed blockchain
- 🛡️ **Secure** - Built with security best practices

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- Phantom Wallet browser extension
- Some SOL for transactions

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Hijanhv/phantom-lottery.git
cd phantom-lottery
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Blockchain**: Solana Web3.js
- **Wallet**: Solana Wallet Adapter (Phantom)
- **Development**: ESLint, PostCSS

## 📱 Usage

### 🎯 **Important: Initialize Master First!**

Before anyone can participate in the lottery, the system needs to be initialized. Here's what you need to know:

#### **What is "Initialize Master"?**
**"Initialize Master"** is a **one-time setup process** that creates the foundational accounts and data structures on the Solana blockchain that your lottery system needs to operate.

#### **🔧 What Happens During Initialization:**

1. **Master Account Creation**
   - Creates a **master lottery account** on Solana blockchain
   - This account stores global lottery settings and configuration
   - Acts as the "central authority" for all lottery operations

2. **Program State Setup**
   - Initializes the lottery program's state
   - Sets up data structures for tracking:
     - Lottery IDs
     - Player entries
     - Prize pools
     - Winner information

3. **Authority Assignment**
   - Designates who can create new lotteries, pick winners, and manage the system

#### **🚀 Why Is This Needed?**

Think of it like **setting up a casino before opening**:
- 🏗️ **Infrastructure**: You need to build the casino building first
- 🎰 **Equipment**: Install lottery machines and systems
- 📋 **Rules**: Establish how games work and prizes are distributed
- 🔐 **Security**: Set up who has access to what

#### **🎲 Before vs After Initialization:**

**❌ Before Initialization:**
- No lottery system exists on blockchain
- Players cannot buy tickets
- No way to track entries or winners
- The smart contract has no data to work with

**✅ After Initialization:**
- 🎰 Lottery system is live and operational
- 🎫 Players can buy tickets
- 🏆 Winners can be picked fairly
- 💰 Prizes can be distributed
- 📊 All data is tracked on Solana blockchain

#### **🔐 Who Should Initialize?**
- Usually the **dApp owner** or **administrator**
- Only needs to be done **once per deployment**
- After initialization, regular users can participate without any special permissions

### **📋 Step-by-Step Usage:**

1. **Initialize the System** (One-time setup):
   - Connect your Phantom wallet
   - Click "🚀 Initialize Lottery System"
   - Confirm the transaction
   - Wait for blockchain confirmation

2. **For Players**:
   - Connect your Phantom wallet
   - Click "Buy Ticket" to join the current lottery
   - Wait for the lottery to end
   - Claim prizes if you win!

3. **For Lottery Operators**:
   - Use "Create Lottery" to start new lottery rounds
   - Use "Pick Winner" to end current lottery and select winner
   - Manage lottery settings and prize distribution

## 🔧 Configuration

The app is configured to work with Solana devnet by default. Update the network settings in `src/app/utils/constants.ts` for mainnet deployment.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💖 Made with Love

**Made with love by your janu** ❤️

---

*Enjoy playing the lottery responsibly!* 🎲
