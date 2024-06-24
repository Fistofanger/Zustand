import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { uuid } from 'uuidv4';

export type Riddle = {
  id?: string;
  title: string;
  question: string;
  answer: string;
};

export type State = {
  riddles: Riddle[];
  loading: boolean;
  error: string | null;
};

export type Actions = {
  fetchRiddles: () => Promise<void>;
  addRiddle: (riddle: Riddle) => void;
  updateRiddle: (riddle: Riddle) => void;
  resetAllRiddles: () => void;
  deleteRiddle: (id: string | undefined) => void;
};

export const useRiddleStore = create<State & Actions>()(
  persist(
    (set) => ({
      riddles: [],
      loading: false,
      error: null,
      fetchRiddles: async () => {
        set({ loading: true, error: null });
        try {
          const response = await fetch(
            'https://api.api-ninjas.com/v1/riddles?limit=10',
            {
              headers: {
                'X-Api-Key': '7qwQzOL+o6QD7D8hxE32ww==iu11fP16KYbCFTHX',
                'Content-type': 'application/json',
              },
            }
          );
          const data = await response.json();
          data.forEach((obj: Riddle) => (obj.id = uuid()));
          set({ riddles: data, loading: false });
        } catch (error) {
          set({ error: error.message, loading: false });
        }
      },
      addRiddle: (riddle: Riddle) => {
        set((state) => ({
          riddles: [...state.riddles, riddle],
        }));
      },
      updateRiddle: (riddle: Riddle) => {
        set((state) => ({
          riddles: state.riddles.map((obj) =>
            obj.id === riddle.id ? riddle : obj
          ),
          riddle,
        }));
      },

      deleteRiddle: (id: string | undefined) => {
        set((state) => ({
          riddles: state.riddles.filter((riddle) => riddle.id !== id),
        }));
      },
      resetAllRiddles: () => {
        set({ riddles: [] });
      },
    }),
    { name: 'riddle-store' }
  )
);
