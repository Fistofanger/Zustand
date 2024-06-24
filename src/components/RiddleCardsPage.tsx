'use client';

import RiddleCardPage from '@/components/RiddleCardPage';
import { useRiddleStore } from '@/store/useRiddleStore';

export default function RiddleCardsPage() {
  const { riddles,loading, error, deleteRiddle } = useRiddleStore();
  return (
    <div className="grid grid-cols-4 gap-4 ">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {riddles &&
        riddles.map((riddle) => (
          <RiddleCardPage
            key={riddle.title}
            riddle={riddle}
            deleteRiddle={deleteRiddle}
          />
        ))}
    </div>
  );
}
