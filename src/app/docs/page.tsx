/* eslint-disable react/no-unescaped-entities */
"use client";

import { apiResponseExamples } from "@/app/docs/apiResponseExamples";
import { CodeSyntaxHighlighter } from "@/components/CodeSyntaxHighlighter";
import { motion } from "framer-motion";

export default function DocsPage() {
  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0, y: 10 }}
    >
      <main className="px-4 md:px-8 lg:px-16">
        <IntroductionSection />

        <GetAllCharactersSection />

        <GetCharacterSection />
      </main>
    </motion.section>
  );
}

function IntroductionSection() {
  return (
    <section className="pt-4">
      <h1 className="font-inter font-semibold text-3xl mb-5">Documentation</h1>

      <h2 className="font-inter font-semibold text-xl">Introduction</h2>
      <p className="font-inter font-light text-base text-[#888888] mb-2">
        This documentation will help you get familiar with the resources of the
        Saint Seiya API and show you how to make different queries, so that you
        can get the most out of it.
      </p>

      <div className="flex space-x-1">
        <p className="font-inter font-light text-base text-[#888888] mb-2">
          Base URL:
        </p>
        <p
          onClick={() =>
            window.open("https://www.saintseiyaapi.com/api", "_blank")
          }
          className="font-inter font-semibold text-base mb-2 underline hover:text-[#888888] cursor-pointer"
        >
          https://www.saintseiyaapi.com/api
        </p>
      </div>

      <p className="font-inter font-light text-base text-[#888888]">
        All requests are GET requests and go over https. All responses will
        return data in JSON.
      </p>
    </section>
  );
}

function GetAllCharactersSection() {
  const ranks = [
    { title: "bronze", description: "Bronze Saints" },
    { title: "gold", description: "Gold Saints" },
    { title: "god", description: "Gods like Athena or Hades" },
    { title: "mariner", description: "Poseidon's army" },
    { title: "specter", description: "Hades' army" },
    { title: "steel", description: "Steel Saints" },
  ];

  return (
    <section className="pt-8">
      <h2 className="font-inter font-semibold text-xl">
        1. Get all characters
      </h2>
      <p className="font-inter font-light text-base text-[#888888] mb-2">
        You can access the list of characters by using the /characters endpoint.
      </p>

      <CodeSyntaxHighlighter code={apiResponseExamples.getAllCharacters} />

      <div className="pt-6">
        <h3 className="font-inter font-semibold text-lg">
          1.1 Query Example with Limit and Page
        </h3>
        <p className="font-inter font-light text-base text-[#888888] mb-2">
          The /characters endpoint supports the <code>limit</code> and{" "}
          <code>page</code> query parameters. You can adjust the number of
          characters returned and navigate through the results.
        </p>
        <p className="font-inter font-light text-base text-[#888888] mb-4">
          Here's an example of a query that fetches 2 characters on page 3:
        </p>

        <CodeSyntaxHighlighter
          code={apiResponseExamples.getCharactersWithQuery}
        />
      </div>

      <div className="pt-6">
        <h3 className="font-inter font-semibold text-lg">1.2 Filter by Rank</h3>
        <p className="font-inter font-light text-base text-[#888888] mb-2">
          The /characters endpoint also supports a <code>rank</code> query
          parameter to filter characters by their rank.
        </p>
        <ul className="list-disc pl-5 text-[#888888] font-inter font-light text-base mb-4">
          {ranks.map(({ title, description }) => (
            <li key={title}>
              <span className="text-white">{title}</span> – {description}
            </li>
          ))}
        </ul>

        <CodeSyntaxHighlighter
          code={`// GET https://www.saintseiyaapi.com/api/characters?rank=gold`}
        />
      </div>
    </section>
  );
}

function GetCharacterSection() {
  return (
    <section className="pt-12 border-t border-[#333] mt-12">
      <h2 className="font-inter font-semibold text-xl">
        2. Get a single character
      </h2>
      <p className="font-inter font-light text-base text-[#888888] mb-2">
        To get a single character, use the /characters/:id endpoint, replacing{" "}
        <code>:id</code> with the character's unique identifier.
      </p>

      <CodeSyntaxHighlighter code={apiResponseExamples.getSingleCharacter} />
    </section>
  );
}
