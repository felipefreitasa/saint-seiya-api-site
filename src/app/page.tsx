/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@/components/Button";
import { CharacterCard } from "@/components/CharacterCard";
import { Error } from "@/components/Error";
import { Loading } from "@/components/Loading";
import { useCharacterGetList } from "@/domain/Characters/useCases/useCharacterGetList";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Loader } from "react-feather";

export default function HomePage() {
  const {
    list,
    ranks,
    isError,
    refresh,
    hasNextPage,
    selectedRank,
    fetchNextPage,
    setSelectedRank,
    rankBeingLoaded,
    isInitialLoading,
    isFetchingNextPage,
  } = useCharacterGetList();

  if (isInitialLoading) {
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
        <section className="text-center mt-30 mb-30 px-4 sm:px-8 md:px-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-inter">
            Saint Seiya API
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
        <section className="flex flex-col items-center mb-6">
          <div className="flex flex-wrap justify-center gap-3">
            {ranks.map((rank) => {
              const isSelected = selectedRank === rank;
              const showLoader = isSelected && rankBeingLoaded === rank;

              const baseClasses =
                "flex items-center justify-center gap-2 px-6 py-2 font-inter font-medium rounded-sm text-xs transition-all duration-300 hover:cursor-pointer";

              const activeClasses =
                "bg-[#1a1a1a] border border-[#333333] text-white hover:bg-[#2a2a2a] hover:border-[#444444]";

              const inactiveClasses =
                "bg-transparent text-white border border-transparent hover:bg-[#333333] hover:border-[#444444] hover:text-white";

              return (
                <button
                  key={rank}
                  onClick={() => {
                    if (!isSelected) {
                      setSelectedRank(rank);
                    }
                  }}
                  className={`${baseClasses} ${
                    isSelected ? activeClasses : inactiveClasses
                  } transition-all duration-300 ease-in-out`}
                >
                  <span className="flex items-center gap-2">
                    {capitalizeFirstLetter(rank)}

                    <AnimatePresence mode="wait">
                      {showLoader && (
                        <motion.span
                          key="loader"
                          initial={{ width: 0, opacity: 0 }}
                          animate={{ width: 16, opacity: 1 }}
                          exit={{ width: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex items-center justify-center overflow-hidden"
                        >
                          <Loader className="h-4 w-4 animate-spin text-white" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        <section className="flex flex-wrap justify-center gap-6 px-4 sm:px-8 md:px-6">
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
