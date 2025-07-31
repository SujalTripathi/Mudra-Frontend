export default function SpinWheel() {
  return (
    <div className="bg-white p-4 rounded-xl shadow col-span-3">
      <h3 className="font-semibold mb-1">Spin & Win Wheel</h3>
      <p className="text-xs text-gray-500 mb-2">Try your luck daily – you might hit the jackpot!</p>
      <div className="bg-[#dadada] h-32 flex items-center justify-center rounded-md mb-4">
        {/* <img src="/spin-wheel.png" alt="Spin Wheel" className="w-20 h-20" /> */}
      </div>
      <button className="bg-[#00b2ff] text-white w-full py-2 rounded font-semibold text-sm">Play Game</button>
    </div>
  );
}
