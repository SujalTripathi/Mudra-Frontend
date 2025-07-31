export default function FeaturedRewards() {
  const rewards = [
    { title: 'NTS Library', cost: '5,000 Coins', img: '/library.jpg' },
    { title: 'NTS Voyages', cost: '10,000 Coins', img: '/voyages.jpg' },
    { title: 'NTS School', cost: '3,000 Coins', img: '/school.jpg' },
    { title: 'NTS', cost: '1,500 Coins', img: '/nts.jpg' },
  ];

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Featured Rewards</h3>
        <a href="#" className="text-blue-500 text-sm">View All</a>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {rewards.map((reward, idx) => (
          <div key={idx} className="border rounded-md p-2 text-center text-sm">
            <div className="bg-[#dadada] h-24 flex items-center justify-center rounded-md mb-4"     >
              {/* <img src={reward.img} alt={reward.title} className="rounded w-full h-24 object-cover" /> */}
            </div>
            <p className="font-semibold mt-2">{reward.title}</p>
            <p className="text-orange-500">{reward.cost}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
