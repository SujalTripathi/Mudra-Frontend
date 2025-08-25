import React from 'react';

export default function TaskCard() {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col justify-between">
      <div>
        <h3 className="font-semibold mb-2">Complete Daily Quiz</h3>
        <p className="text-sm text-gray-600">Test your NTS knowledge and earn coins!</p>
        <p className="text-orange-500 mt-2 text-sm font-semibold">🎉 100 Coins Reward</p>
      </div>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md self-start">Start Task</button>
    </div>
  );
}
