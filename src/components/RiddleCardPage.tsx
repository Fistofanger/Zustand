import { Riddle } from '@/store/useRiddleStore';
import Link from 'next/link';

export default function RiddleCard({
  riddle,
  deleteRiddle,
}: {
  riddle: Riddle;
  deleteRiddle: (id: string | undefined) => void;
}) {
  return (
    <div className="flex flex-col justify-between max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col gap-7">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {riddle.title}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {riddle.question}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {riddle.answer}
        </p>
      </div>
      <div className="flex justify-around">
        <Link
          href={`/${riddle.id}`}
          className="text-center w-1/3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Update
        </Link>
        <button
          onClick={() => deleteRiddle(riddle.id)}
          className="w-1/3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
