/** @format */

"use client";

import dynamic from "next/dynamic";
import Navbar from "./components/navbar";
import WalletConnectionError from "./components/WalletConnectionError";
import { useAppContext } from "./context/AppContextProvider";
import { useEffect, useState } from "react";

const WalletMultiButton = dynamic(
  () =>
    import("@solana/wallet-adapter-react-ui").then(
      (mod) => mod.WalletMultiButton
    ),
  { ssr: false }
);

export default function Home() {
  const {
    connected,
    isInitialized,
    initMaster,
    createLottery,
    lotteryId,
    lotteryPot,
    isLotteryAuthority,
    buyTicket,
    pickWinner,
    isFinished,
    canClaim,
    claimPrize,
  } = useAppContext();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isInitialized) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center min-h-screen font-main text-black">
          <div className="bg-white bg-opacity-90 shadow-xl rounded-xl p-8 border-2 border-purple-200 text-center max-w-md mx-4">
            {/* Welcome Header */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-purple-600 mb-2">
                🎰 Welcome to Phantom Lottery! 🎰
              </h1>
              <p className="text-gray-600 text-sm">
                Made with ❤️ by{" "}
                <a 
                  href="https://github.com/Hijanhv" 
                  className="text-blue-600 hover:text-blue-800 underline font-semibold"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  @Hijanhv
                </a>
              </p>
            </div>
            
            {/* Lottery Info */}
            <div className="bg-purple-50 rounded-lg p-4 mb-6">
              <p className="text-lg font-semibold text-purple-800 mb-2">
                🎲 Lottery System Setup
              </p>
              <p className="text-sm text-gray-600 mb-3">
                The lottery needs to be initialized before players can join.
              </p>
              <p className="text-purple-600 font-medium">
                Lottery ID: {lotteryId}
              </p>
            </div>
            
            {/* Action Button */}
            {connected ? (
              <div>
                <button
                  onClick={initMaster}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  🚀 Initialize Lottery System
                </button>
                <p className="text-xs text-gray-500 mt-3">
                  Click to set up the lottery master account
                </p>
              </div>
            ) : (
              <div>
                <p className="text-gray-600 mb-4">
                  Connect your Phantom wallet to get started
                </p>
                <WalletMultiButton />
              </div>
            )}
            
            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500">
                🔗 View source on{" "}
                <a 
                  href="https://github.com/Hijanhv/phantom-lottery" 
                  className="text-blue-500 hover:text-blue-700 underline"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <>
        <div className="flex flex-col justify-center items-center py-12 font-main">
          {/* Wallet Connection Help */}
          {!connected && (
            <div className="w-full md:w-1/2 mb-6">
              <WalletConnectionError />
            </div>
          )}
          
          <div className="border-white bg-white opacity-75 p-6 border rounded-lg w-full md:w-1/2">
            {/* Personal Message Header */}
            <div className="text-center mb-6 pb-4 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-purple-600 mb-2">
                🎰 Solana Phantom Lottery 🎰
              </h2>
              <p className="text-sm text-gray-600 italic">
                Customized with ❤️ by{" "}
                <a 
                  href="https://github.com/Hijanhv" 
                  className="text-blue-600 hover:text-blue-800 underline font-semibold"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  @Hijanhv
                </a>
                {" "}for beloved venkatesh
              </p>
              <p className="text-xs text-gray-500 mt-1">
                🔗 View source on{" "}
                <a 
                  href="https://github.com/Hijanhv/phantom-lottery" 
                  className="text-blue-500 hover:text-blue-700 underline"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </p>
            </div>
            
            <p className="mb-4 text-lg">
              <span className="font-bold">Lottery ID:</span> {lotteryId}
            </p>
            <p className="mb-4 text-lg">
              <span className="font-bold">Lottery Pot:</span> {lotteryPot}
            </p>

            {!isFinished ? (
              <h5 className="my-4 font-bold text-3xl text-center text-green-400">
                Lottery {lotteryId} is live, join now!
              </h5>
            ) : (
              <h5 className="my-4 font-bold text-3xl text-center text-red-500">
                Lottery Closed! Wait for the next one.
              </h5>
            )}

            <div className="flex flex-col items-center space-y-4 mt-6">
              {connected ? (
                <>
                  {!isFinished && (
                    <button
                      onClick={buyTicket}
                      className="bg-blue-600 hover:bg-blue-700 py-2.5 rounded-lg w-40 font-medium text-white"
                    >
                      Buy Ticket
                    </button>
                  )}

                  {isLotteryAuthority && !isFinished && (
                    <button
                      onClick={pickWinner}
                      className="bg-green-600 hover:bg-green-700 py-2.5 rounded-lg w-40 font-medium text-white"
                    >
                      Pick Winner
                    </button>
                  )}

                  {canClaim && (
                    <button
                      onClick={claimPrize}
                      className="bg-yellow-500 hover:bg-yellow-600 py-2.5 rounded-lg w-40 font-medium text-white"
                    >
                      Claim Prize
                    </button>
                  )}

                  <button
                    onClick={createLottery}
                    className="bg-purple-600 hover:bg-purple-700 py-2.5 rounded-lg w-40 font-medium text-white"
                  >
                    Create Lottery
                  </button>
                </>
              ) : (
                isMounted && <WalletMultiButton />
              )}
            </div>
          </div>
          
          {/* Footer Credit */}
          <div className="mt-8 text-center">
            <div className="bg-black bg-opacity-70 text-white py-3 px-6 rounded-lg inline-block">
              <p className="text-sm">
                🚀 Built by <a href="https://github.com/Hijanhv" className="text-blue-300 hover:text-blue-100 underline font-bold" target="_blank" rel="noopener noreferrer">@Hijanhv</a> with ❤️ for beloved venkatesh
              </p>
              <p className="text-xs mt-1 opacity-75">
                GitHub: <a href="https://github.com/Hijanhv/phantom-lottery" className="text-blue-300 hover:text-blue-100 underline" target="_blank" rel="noopener noreferrer">phantom-lottery</a>
              </p>
            </div>
          </div>
        </div>
      </>
    </>
  );
}