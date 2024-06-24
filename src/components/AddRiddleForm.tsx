'use client';

import { useRiddleStore } from '@/store/useRiddleStore';

export default function AddRiddleForm() {
  const { addRiddle } = useRiddleStore();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const { title, question, answer } = Object.fromEntries(formData);

    if (
      typeof title !== 'string' ||
      typeof question !== 'string' ||
      typeof answer !== 'string'
    )
      return;

    addRiddle({ title, question, answer });
    form.reset();
  };

  return (
    <div className="mb-6 w-1/4">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <label
          htmlFor="default-input"
          className="block text-sm font-medium text-gray-900 dark:text-white"
        >
          Title
        </label>
        <input
          type="text"
          id="default-input"
          name="title"
          placeholder="Write title here..."
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <label
          htmlFor="question"
          className="block text-sm font-medium text-gray-900 dark:text-white"
        >
          Question
        </label>
        <textarea
          id="question"
          name="question"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your question here..."
        ></textarea>
        <label
          htmlFor="answer"
          className="block text-sm font-medium text-gray-900 dark:text-white"
        >
          Answer
        </label>
        <textarea
          id="answer"
          name="answer"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your answer here..."
        ></textarea>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Add Riddle
        </button>
      </form>
    </div>
  );
}
