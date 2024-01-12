import Link from 'next/link';
import MagicButton from './components/magic-button';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      {/* <MagicButton /> */}
      <Link href="/dashboard">To Dashboard</Link>
    </main>
  );
}
