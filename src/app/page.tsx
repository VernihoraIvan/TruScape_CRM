import ActiveLabel, { Status } from './components/status-label';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <ActiveLabel status={Status.Active}>Active label</ActiveLabel>
      <ActiveLabel status={Status.Nonactive} disabled={true}>
        Nonactive label
      </ActiveLabel>
      <ActiveLabel status={Status.Pending}>Pending label</ActiveLabel>
      <ActiveLabel status={Status.Suspended}>Suspended label</ActiveLabel>
    </main>
  );
}
