import { Loader } from "react-feather";

interface ButtonProps {
  title: string;
  isLoading?: boolean;
  onClick?: () => void;
  variation?: "default" | "outline";
}

export function Button({
  title,
  onClick,
  isLoading = false,
  variation = "default",
}: ButtonProps) {
  const buttonClassName = `flex items-center justify-center gap-2 px-6 py-2 font-inter font-medium rounded-sm text-xs hover:cursor-pointer transition-all duration-300 ${
    variation === "outline"
      ? "bg-transparent border border-[#333333] text-white hover:bg-[#1a1a1a]"
      : "bg-white text-black hover:bg-[#999999]"
  }`;

  return (
    <button onClick={onClick} className={buttonClassName} disabled={isLoading}>
      {isLoading && <Loader className="w-4 h-4 animate-spin" />}
      {title}
    </button>
  );
}
