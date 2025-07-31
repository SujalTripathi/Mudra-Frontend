export default function CardsBox() {
    const items = [
      { label: 'Tasks', desc: 'Earn coins from daily quests', icon: '🧾' },
      { label: 'Games', desc: 'Play fun mini-games for rewards', icon: '🎮' },
      { label: 'Projects', desc: 'Redeem coins for exclusive items', icon: '🎁' },
    ];
    return (
      <>
        {items.map((item, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow">
            <div className="text-xl">{item.icon}</div>
            <h4 className="font-semibold mt-2">{item.label}</h4>
            <p className="text-xs text-gray-500">{item.desc}</p>
          </div>
        ))}
      </>
    );
  }
  