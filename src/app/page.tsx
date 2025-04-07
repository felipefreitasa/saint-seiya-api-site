/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@/components/Button";
import { CharacterCard } from "@/components/CharacterCard";
import { Error } from "@/components/Error";
import { Loading } from "@/components/Loading";
import { useCharacterGetList } from "@/domain/Characters/useCases/useCharacterGetList";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  const {
    list,
    isError,
    refresh,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useCharacterGetList();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <Error
        onRetry={refresh}
        message="Something went wrong. Please try again."
      />
    );
  }

  return (
    <main className="flex items-center justify-center flex-col">
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <section className="text-center mt-20 mb-20 px-4 sm:px-8 md:px-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-inter">
            The Saint Seiya API
          </h1>

          <h2 className="font-extralight font-inter text-xl sm:text-2xl md:text-2xl mt-1 text-[#999999] mb-2">
            Awaken your code's seventh sense
          </h2>

          <div className="space-x-3 flex items-center justify-center">
            <Link href="/docs">
              <Button title="Read the docs" />
            </Link>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://saintseiyaapi-71b85b0cc3ba.herokuapp.com/api-docs/"
            >
              <Button title="Explore API with Swagger" variation="outline" />
            </a>
          </div>
        </section>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <section className="flex flex-wrap justify-center gap-6 px-4 sm:px-8 md:px-6">
          <AnimatePresence initial={false}>
            {list?.map((character) => (
              <CharacterCard
                key={character._id}
                name={character.name}
                rank={character.rank}
                image={character.image}
                gender={character.gender}
                mentor={character.mentor}
                constellation={character.constellation}
                techniques={
                  character.techniques.length > 1
                    ? `${character.techniques[0]} & ${character.techniques[1]}`
                    : character.techniques[0]
                }
                onClick={() => {
                  window.open(
                    `https://www.saintseiyaapi.com/api/characters/${character._id}`,
                    "_blank"
                  );
                }}
              />
            ))}
          </AnimatePresence>

          {hasNextPage && (
            <div className="w-full flex justify-center ">
              <Button
                title="Load more"
                onClick={fetchNextPage}
                isLoading={isFetchingNextPage}
              />
            </div>
          )}
        </section>
      </motion.div>
    </main>
  );
}
