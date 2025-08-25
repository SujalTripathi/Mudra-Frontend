import RecentActivity from './RecentActivity';
import CardsBox from './CardsBox';
import SpinWheel from './SpinWheel';

export default function ActivityAndCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-6">
      <RecentActivity />
      <div className="md:col-span-2 grid sm:grid-cols-3 gap-4">
        <CardsBox />
        <SpinWheel />
      </div>
    </div>
  );
}
