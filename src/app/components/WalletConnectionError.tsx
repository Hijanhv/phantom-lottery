/** @format */

"use client";

import React from 'react';

const WalletConnectionError = () => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
      <div className="flex">
        <div className="py-1">
          <svg className="fill-current h-6 w-6 text-red-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
          </svg>
        </div>
        <div>
          <p className="font-bold">Wallet Connection Issue</p>
          <p className="text-sm">
            This is a <strong>Solana</strong> lottery dApp. Please install a Solana wallet like:
          </p>
          <ul className="list-disc list-inside text-sm mt-2">
            <li><a href="https://phantom.app/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Phantom Wallet</a> (Recommended)</li>
            <li><a href="https://solflare.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Solflare Wallet</a></li>
          </ul>
          <p className="text-sm mt-2">
            If you have MetaMask installed, it might be interfering. Please disable it temporarily or use a different browser.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WalletConnectionError;
