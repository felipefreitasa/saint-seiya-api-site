/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@/components/Button";
import { CharacterCard } from "@/components/CharacterCard";
import { Error } from "@/components/Error";
import { Loading } from "@/components/Loading";
import { useCharacterGetList } from "@/domain/Characters/useCases/useCharacterGetList";
import Link from "next/link";

export default function HomePage() {
  const {
    characterList,
    characterListError,
    refetchCharacterList,
    isLoadingCharacterList,
  } = useCharacterGetList();

  if (isLoadingCharacterList) {
    return <Loading />;
  }

  if (characterListError) {
    return (
      <Error
        onRetry={refetchCharacterList}
        message="Something went wrong. Please try again."
      />
    );
  }

  return (
    <main className="flex items-center justify-center flex-col">
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

      <section className="flex flex-wrap justify-center gap-6 px-4 sm:px-8 md:px-6">
        {characterList?.data.characters.map((character) => (
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
      </section>
    </main>
  );
}
