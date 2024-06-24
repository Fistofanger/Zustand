'use client';

import RiddleCardPage from '@/components/RiddleCardPage';
import { useRiddleStore } from '@/store/useRiddleStore';

export default function RiddleCardsPage() {
  const { riddles, deleteRiddle } = useRiddleStore();
  return (
    <div className="grid grid-cols-4 gap-4 ">
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
