'use client';

import { useRiddleStore } from '@/store/useRiddleStore';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function UpdateRiddleForm({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const { riddles, updateRiddle } = useRiddleStore();
  const riddle = riddles.find((riddle) => riddle.id === id);
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: '',
    question: '',
    answer: '',
  });

  useEffect(() => {
    if (riddle) {
      setFormData({
        title: riddle.title,
        question: riddle.question,
        answer: riddle.answer,
      });
    }
  }, [riddle]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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

    updateRiddle({ id, title, question, answer });
    router.back();
  };

  return (
    <div className="UpdateRiddleForm mb-6 ">
      <div className="text-4xl">Update Riddle Form</div>
      <form className="flex flex-col gap-4 w-1/4" onSubmit={handleSubmit}>
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
          value={formData.title}
          onChange={handleChange}
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
          value={formData.question}
          onChange={handleChange}
          rows={6}
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
          value={formData.answer}
          onChange={handleChange}
          rows={6}
        ></textarea>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Update Riddle
        </button>
      </form>
    </div>
  );
}
