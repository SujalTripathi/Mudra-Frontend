export default function DailyTask() {
    return (
      <div className="bg-white p-4 rounded-xl shadow flex flex-col justify-between">
        <h3 className="font-semibold text-base">Complete Daily Quiz</h3>
        <p className="text-sm text-gray-500 mt-1">Test your NTS knowledge and earn coins!</p>
        <p className="text-orange-500 font-medium mt-2 text-sm">💰 100 Coins Reward</p>
        <button className="mt-4 bg-[#00b2ff] text-white px-4 py-2 rounded-md text-sm font-semibold w-fit">Start Task</button>
      </div>
    );
  }
  