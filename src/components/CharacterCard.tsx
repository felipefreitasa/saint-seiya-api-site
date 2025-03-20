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
    <div className="bg-[#262626] flex flex-col sm:flex-row rounded-sm overflow-hidden w-full sm:w-auto">
      <Image
        priority
        alt={name}
        src={image}
        width={150}
        height={100}
        className="w-full sm:w-auto h-auto object-cover"
      />

      <div className="p-4 w-full sm:w-auto">
        <p className="font-inter font-bold text-lg mb-2">{name}</p>

        <div>
          <div className="flex flex-row gap-x-4 mb-3 justify-between w-full">
            <CharacterInfo title="Constellation" description={constellation} />
            <CharacterInfo title="Rank" description={rank} />
          </div>

          <div className="flex flex-row gap-x-4 mb-3 justify-between w-full">
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
    <div>
      <p className="font-inter font-light text-sm text-[#999999]">{title}</p>
      <p className="font-inter font-medium text-sm">{description}</p>
    </div>
  );
}
