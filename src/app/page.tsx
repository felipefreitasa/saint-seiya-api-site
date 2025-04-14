"use client";

import { useHome } from "@/app/useHome";
import { Button } from "@/components/Button";
import { CharacterCard } from "@/components/CharacterCard";
import { Error } from "@/components/Error";
import { FilterTag } from "@/components/FilterTag";
import { Loading } from "@/components/Loading";
import { Character } from "@/domain/Characters/characterTypes";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

interface RankFilterSectionProps {
  ranks: string[];
  selectedRank: string;
  rankBeingLoaded: string | null;
  onSelect: (rank: string) => void;
}

interface CharacterListSectionProps {
  hasNextPage: boolean;
  onLoadMore: () => void;
  isLoadingMore: boolean;
  characters: Character[];
}

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
  } = useHome();

  if (isInitialLoading) {
    return <Loading />;
  }

  if (isError)
    return (
      <Error
        onRetry={refresh}
        message="Something went wrong. Please try again."
      />
    );

  return (
    <>
      <Head>
        <title>Saint Seiya API | Free REST API for Cavaleiros do Zodíaco</title>
        <meta
          name="description"
          content="Free and open-source API with data from Saint Seiya (Cavaleiros do Zodíaco). Access Bronze Saints, Gold Saints, Specters, and more!"
        />
        <meta
          name="keywords"
          content="Saint Seiya API, Cavaleiros do Zodíaco API, Anime API, Bronze Saints, Gold Saints, Specters, REST API, GraphQL, Swagger, Free API"
        />
        <meta name="author" content="Felipe Freitas" />
        <meta property="og:title" content="Saint Seiya API" />
        <meta
          property="og:description"
          content="Explore the world of Saint Seiya through a powerful free API."
        />
        <meta property="og:url" content="https://www.saintseiyaapi.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.saintseiyaapi.com/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Saint Seiya API" />
        <meta
          name="twitter:description"
          content="Explore the Saint Seiya universe with a free public API."
        />
        <meta
          name="twitter:image"
          content="https://www.saintseiyaapi.com/og-image.jpg"
        />
        <link rel="canonical" href="https://www.saintseiyaapi.com/" />
      </Head>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Saint Seiya API",
            url: "https://www.saintseiyaapi.com",
            description:
              "Free and open-source REST API with data from the Saint Seiya universe (Cavaleiros do Zodíaco).",
            sameAs: [
              "https://github.com/felipefreitasa",
              "https://medium.com/@felipefreitasa",
            ],
          }),
        }}
      />

      <main className="flex flex-col items-center justify-center">
        <motion.section
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0, y: 10 }}
        >
          <HeroSection />
        </motion.section>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <RankFilterSection
            ranks={ranks}
            onSelect={setSelectedRank}
            selectedRank={selectedRank}
            rankBeingLoaded={rankBeingLoaded}
          />

          <CharacterListSection
            characters={list}
            hasNextPage={hasNextPage}
            onLoadMore={fetchNextPage}
            isLoadingMore={isFetchingNextPage}
          />
        </motion.div>
      </main>
    </>
  );
}

function HeroSection() {
  return (
    <section className="text-center mt-30 mb-30 px-4 sm:px-8 md:px-16">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-inter">
        Saint Seiya API
      </h1>

      <h2 className="font-extralight font-inter text-xl sm:text-2xl md:text-2xl mt-1 text-[#999999] mb-2">
        A free and open-source REST API with all your favorite characters!
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
  );
}

function RankFilterSection({
  ranks,
  selectedRank,
  rankBeingLoaded,
  onSelect,
}: RankFilterSectionProps) {
  return (
    <section className="flex flex-col items-center mb-6">
      <div className="flex flex-wrap justify-center gap-3">
        {ranks.map((rank) => {
          const isSelected = selectedRank === rank;
          const isLoading = isSelected && rankBeingLoaded === rank;

          return (
            <FilterTag
              key={rank}
              label={rank}
              isSelected={isSelected}
              isLoading={isLoading}
              onClick={() => {
                if (!isSelected) onSelect(rank);
              }}
            />
          );
        })}
      </div>
    </section>
  );
}

function CharacterListSection({
  characters,
  hasNextPage,
  onLoadMore,
  isLoadingMore,
}: CharacterListSectionProps) {
  return (
    <section className="flex flex-wrap justify-center gap-6 px-4 sm:px-8 md:px-6">
      {characters.map((character) => (
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
          onClick={() =>
            window.open(
              `https://www.saintseiyaapi.com/api/characters/${character._id}`,
              "_blank"
            )
          }
        />
      ))}

      {hasNextPage && (
        <div className="w-full flex justify-center">
          <Button
            title="Load more"
            onClick={onLoadMore}
            isLoading={isLoadingMore}
          />
        </div>
      )}
    </section>
  );
}
