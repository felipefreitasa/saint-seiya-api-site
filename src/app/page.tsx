import { CharacterCard } from "@/components/CharacterCard";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex items-center justify-center flex-col">
      <section className="text-center mt-20 mb-20 px-4 sm:px-8 md:px-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-inter">
          The Saint Seiya API
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl mt-2 text-[#999999] font-light font-inter">
          {`Awaken your code's seventh sense`}
        </h2>

        <button className="mt-4 px-6 py-2 bg-white text-black font-inter font-bold rounded-l-full rounded-r-full text-xs hover:bg-[#999999]">
          <Link href="/docs">Read the docs</Link>
        </button>
      </section>

      <section className="flex flex-wrap justify-center gap-6 px-4 sm:px-8 md:px-16">
        <CharacterCard
          name="Shiryu"
          image="https://www.saintseiyaapi.com/assets/shiryu.jpeg"
          constellation="Dragon"
          gender="Male"
          mentor="Dohko"
          rank="Bronze"
          techniques="Rozanha & Excalibur"
        />
      </section>
    </main>
  );
}
