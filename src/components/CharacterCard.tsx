import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import Image from "next/image";

interface CharacterCardProps {
  name: string;
  rank: string;
  image: string;
  mentor: string;
  gender: string;
  techniques: string;
  constellation: string;
}

interface CharacterInfoProps {
  title: string;
  description: string;
}

export function CharacterCard({
  name,
  rank,
  image,
  mentor,
  gender,
  techniques,
  constellation,
}: CharacterCardProps) {
  return (
    <div className="border border-[#333333] flex flex-col sm:flex-row rounded-sm overflow-hidden w-full sm:w-[400px]">
      <Image
        priority
        alt={name}
        src={image}
        width={150}
        height={100}
        className="w-full sm:w-[150px] h-auto object-cover flex-shrink-0"
      />

      <div className="flex flex-col w-full space-y-3 p-4">
        <p className="font-inter font-medium text-lg">
          {capitalizeFirstLetter(name)}
        </p>

        <div className="space-y-2">
          <div className="flex flex-row gap-x-4 justify-between">
            <CharacterInfo title="Constellation" description={constellation} />
            <CharacterInfo title="Rank" description={rank} />
          </div>

          <div className="flex flex-row gap-x-4 justify-between">
            <CharacterInfo title="Mentor" description={mentor} />
            <CharacterInfo title="Gender" description={gender} />
          </div>

          <CharacterInfo title="Techniques" description={techniques} />
        </div>
      </div>
    </div>
  );
}

function CharacterInfo({ title, description }: CharacterInfoProps) {
  return (
    <div className="w-full">
      <p className="font-inter font-light text-xs text-[#888888]">{title}</p>
      <p className="font-inter font-light text-sm break-words">
        {capitalizeFirstLetter(description)}
      </p>
    </div>
  );
}
