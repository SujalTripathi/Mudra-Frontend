export default function RecentActivity() {
    const activities = [
      { text: 'Earned from Daily Login Bonus', coins: '+50 Coins', time: '10 min ago' },
      { text: 'Won 200 coins in Quick Quiz', coins: '+200 Coins', time: '35 min ago' },
      { text: 'Completed "App Feedback Survey"', coins: '+150 Coins', time: '1 hour ago' },
      { text: "Redeemed 'NTS Learn' eBook", coins: '-500 Coins', time: '3 hours ago' },
      { text: 'Earned 100 coins from Referral Program', coins: '+100 Coins', time: '5 hours ago' },
    ];
  
    return (
      <div className="bg-white p-4 rounded-xl shadow text-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold">Recent Activity</h3>
          <a href="#" className="text-blue-500 text-xs">View All</a>
        </div>
        <ul className="space-y-3">
          {activities.map((a, i) => (
            <li key={i} className="flex justify-between items-start">
              <div>{a.text}</div>
              <div className="text-right">
                <p className={`font-semibold ${a.coins.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>{a.coins}</p>
                <p className="text-xs text-gray-400">{a.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  