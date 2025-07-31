export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 font-bold text-[#007bff] text-lg">
          <img src="/logo.png" className="w-6 h-6" alt="logo" />
          NTS Mudra
        </div>
        <nav className="flex gap-6 text-sm text-gray-700">
          <span>Home</span>
          <span>Wallet</span>
          <span>Tasks</span>
          <span>Games</span>
          <span>Services</span>
          <span>Profile</span>
        </nav>
        <div className="w-8 h-8 rounded-full bg-gray-300"></div>
      </div>
    </header>
  );
}
