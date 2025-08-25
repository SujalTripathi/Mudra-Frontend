'use client';
// Imports now use the clean '@/' path

import BalanceCard from '@/components/BalanceCard';
import ActivityAndCards from '@/components/ActivityAndCards';
import DailyTask from '@/components/DailyTask';
import FeaturedRewards from '@/components/FeaturedRewards';


export default function HomePage() {
  return (
    // The extra div is removed, making the code simpler
    <>
     
      <main className="max-w-6xl mx-auto px-4 py-6">
        <BalanceCard />
        <ActivityAndCards />
        <div className="mt-6">
          <DailyTask />
        </div>
        <div className="mt-6">
          <FeaturedRewards />
        </div>
      </main>
     
    </>
  );
}