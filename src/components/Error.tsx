import { Button } from "@/components/Button";
import Image from "next/image";

interface ErrorProps {
  message: string;
  onRetry: () => void;
}

export function Error({ message, onRetry }: ErrorProps) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="flex flex-col items-center text-center">
        <Image
          priority
          width={100}
          height={45}
          alt="Saint Seiya Logo"
          src="/saint-seiya-logo.png"
        />
        <p className="text-white font-inter text-lg mb-2 mt-1">{message}</p>
        <Button title="Try again" onClick={onRetry} />
      </div>
    </div>
  );
}
