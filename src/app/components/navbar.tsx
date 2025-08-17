/** @format */

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const Navbar = () => {
  return (
    <>
      <div className="relative z-10 flex flex-col items-center justify-between px-4 py-2 bg-white opacity-75">
        <div className="w-full flex items-center justify-between">
          <div className="font-main text-3xl">
            Lottery | Win-Win for everyone! :)
          </div>
          <WalletMultiButton />
        </div>
        <div className="w-full mt-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-lg text-center">
          <div className="text-lg font-bold">
            🎰 MADE WITH ❤️ BY 
            <a 
              href="https://github.com/Hijanhv" 
              className="text-yellow-300 hover:text-yellow-100 underline mx-2 text-xl font-extrabold"
              target="_blank" 
              rel="noopener noreferrer"
            >
              @HIJANHV
            </a>
            FOR BELOVED VENKATESH 🎰
          </div>
          <div className="text-sm mt-1">
            🔥 GitHub: github.com/Hijanhv | ⭐ Star this project!
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;