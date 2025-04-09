import { AnimatePresence, motion } from "framer-motion";
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
      <span className="flex items-center gap-2">
        {title}

        <AnimatePresence mode="wait">
          {isLoading && (
            <motion.span
              key="loader"
              transition={{ duration: 0.3 }}
              exit={{ width: 0, opacity: 0 }}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 16, opacity: 1 }}
              className="flex items-center justify-center overflow-hidden"
            >
              <Loader className="h-4 w-4 animate-spin" />
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </button>
  );
}
