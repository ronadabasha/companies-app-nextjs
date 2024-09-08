import { redirect } from "next/navigation";

export default function Home() {
  redirect(`/ceos`);
  return (
    <div className="items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col"></main>
    </div>
  );
}
