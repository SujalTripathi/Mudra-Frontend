'use client';
import Header from './components/Header';
import BalanceCard from './components/BalanceCard';
import ActivityAndCards from './components/ActivityAndCards';
import DailyTask from './components/DailyTask';
import FeaturedRewards from './components/FeaturedRewards';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="bg-[#f8fafc] text-[#222]">
      <Header />
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
      <Footer />
    </div>
  );
}
