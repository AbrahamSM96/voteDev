import { NavUserOutlet } from "components/NavUserOutlet";

export function Header() {
  return (
    <header className="flex items-center w-full justify-between max-w-4xl mx-auto my-4">
      <h1 className="font-bold text-xl">🗳 Vote.dev</h1>
      <div>
        <NavUserOutlet />
      </div>
    </header>
  );
}
