export default function Footer() {
  return (
    <footer className="bg-white border-t mt-10 pt-10 pb-6">
      <div className="text-center space-y-4">
        <h4 className="text-lg font-semibold text-[#222]">NTS Mudra</h4>
        <div>
          <p className="text-sm text-gray-600">Stay updated with NTS Mudra</p>
          <div className="mt-2 flex justify-center">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 border rounded-l-md text-sm w-64"
            />
            <button className="bg-[#00b2ff] text-white px-4 py-2 rounded-r-md text-sm font-semibold">
              Subscribe
            </button>
          </div>
        </div>
        <div className="mt-6">
          <button className="border border-gray-300 px-4 py-1 rounded text-sm text-gray-600">English</button>
        </div>
        <p className="text-xs text-gray-400">© 2023 NTS Mudra.</p>
      </div>
     
    </footer>
  );
}
