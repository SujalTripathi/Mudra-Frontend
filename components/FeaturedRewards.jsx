import Image from 'next/image'; // 1. Import the Image component

export default function FeaturedRewards() {
  // 2. Updated the image paths to include '/images/projects/'
  const rewards = [
    { title: 'NTS Library', cost: '5,000 Coins', img: '/images/projects/library.jpg' },
    { title: 'NTS Voyages', cost: '10,000 Coins', img: '/images/projects/voyages.jpg' },
    { title: 'NTS School', cost: '3,000 Coins', img: '/images/projects/school.jpg' }, // Assuming you have school.jpg
    { title: 'Kaamigo', cost: '1,500 Coins', img: '/images/projects/kaamigo.jpg' }, // Changed to Kaamigo
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
            {/* 3. Uncommented and changed <img> to <Image> */}
            <div className="bg-gray-100 h-24 flex items-center justify-center rounded-md mb-4 relative">
              <Image 
                src={reward.img} 
                alt={reward.title} 
                layout="fill"
                objectFit="cover"
                className="rounded-md" 
              />
            </div>
            <p className="font-semibold mt-2">{reward.title}</p>
            <p className="text-orange-500">{reward.cost}</p>
          </div>
        ))}
      </div>
    </div>
  );
}