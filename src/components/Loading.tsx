import Image from "next/image";

export function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="flex flex-col items-center">
        <Image
          priority
          width={100}
          height={40}
          alt="Saint Seiya Logo"
          src="/saint-seiya-logo.png"
          className="animate-pulse mb-4"
        />
      </div>
    </div>
  );
}
