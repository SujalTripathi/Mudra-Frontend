export default function BalanceCard() {
    return (
      <div className="bg-[url('/coins-bg.png')] bg-[#dadada] bg-cover bg-center rounded-xl p-6 text-center text-white">
        <p className="text-sm font-medium">Current Balance</p>
        <h1 className="text-4xl font-extrabold mt-2 flex justify-center items-center gap-2">
           <img src="/images/coin-image.jpg" className="w-6 h-6" /> 
          12,450
        </h1>
        <button className="mt-4 bg-[#00b2ff] hover:bg-[#009de0] text-white px-4 py-2 rounded-md text-sm font-semibold">
          View Wallet
        </button>
      </div>
    );
  }
  