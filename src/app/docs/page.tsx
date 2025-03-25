/* eslint-disable react/no-unescaped-entities */
"use client";

import { apiResponseExamples } from "@/app/docs/apiResponseExamples";
import { CodeSyntaxHighlighter } from "@/components/CodeSyntaxHighlighter";

export default function DocsPage() {
  return (
    <main className="px-4 md:px-8 lg:px-16">
      <section className="pt-4">
        <h1 className="font-inter font-semibold text-3xl mb-5">
          Documentation
        </h1>

        <h2 className="font-inter font-semibold text-xl">Introduction</h2>
        <p className="font-inter font-light text-base text-[#888888] mb-2">
          This documentation will help you get familiar with the resources of
          the Saint Seiya API and show you how to make different queries, so
          that you can get the most out of it.
        </p>

        <div className="flex space-x-1">
          <p className="font-inter font-light text-base text-[#888888] mb-2">
            Base URL:
          </p>
          <p
            onClick={() =>
              window.open("https://api.saintseiyaapi.com", "_blank")
            }
            className="font-inter font-semibold text-base mb-2 underline hover:text-[#888888] cursor-pointer"
          >
            https://api.saintseiyaapi.com
          </p>
        </div>

        <p className="font-inter font-light text-base text-[#888888]">
          All requests are GET requests and go over https. All responses will
          return data in JSON.
        </p>
      </section>

      <section className="pt-8">
        <h2 className="font-inter font-semibold text-xl">Get all characters</h2>
        <p className="font-inter font-light text-base text-[#888888] mb-2">
          You can access the list of characters by using the /characters
          endpoint.
        </p>

        <CodeSyntaxHighlighter code={apiResponseExamples.getAllCharacters} />
      </section>

      <section className="pt-8">
        <h2 className="font-inter font-semibold text-xl">
          Query Example with Limit and Page
        </h2>
        <p className="font-inter font-light text-base text-[#888888] mb-2">
          The /characters endpoint supports the limit and page query parameters.
          You can adjust the number of characters returned and navigate through
          the results.
        </p>
        <p className="font-inter font-light text-base text-[#888888] mb-4">
          Here's an example of a query that fetches 2 characters on page 3:
        </p>

        <CodeSyntaxHighlighter
          code={apiResponseExamples.getCharactersWithQuery}
        />
      </section>

      <section className="pt-8">
        <h2 className="font-inter font-semibold text-xl">
          Get a single character
        </h2>
        <p className="font-inter font-light text-base text-[#888888] mb-2">
          To get a single character, use the /characters/:id endpoint, replacing
          :id with the character's unique identifier.
        </p>

        <CodeSyntaxHighlighter code={apiResponseExamples.getSingleCharacter} />
      </section>
    </main>
  );
}
