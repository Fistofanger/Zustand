import AddRiddleForm from '@/components/AddRiddleForm';
import ApiButtons from '@/components/ApiButtons';
import RiddleCardsPage from '@/components/RiddleCardsPage';

export default function Home() {
  return (
    <main>
      <div className="text-4xl">HomePage</div>
      <ApiButtons />
      <AddRiddleForm />
      <RiddleCardsPage />
    </main>
  );
}
