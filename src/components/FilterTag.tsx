import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { AnimatePresence, motion } from "framer-motion";
import { Loader } from "react-feather";

interface FilterTagProps {
  label: string;
  isLoading: boolean;
  isSelected: boolean;
  onClick: () => void;
}

export function FilterTag({
  label,
  onClick,
  isLoading,
  isSelected,
}: FilterTagProps) {
  const baseClasses =
    "flex items-center justify-center gap-2 px-6 py-2 font-inter font-medium rounded-sm text-xs transition-all duration-300 hover:cursor-pointer";

  const activeClasses =
    "bg-[#1a1a1a] border border-[#333333] text-white hover:bg-[#2a2a2a] hover:border-[#444444]";

  const inactiveClasses =
    "bg-transparent text-white border border-transparent hover:bg-[#333333] hover:border-[#444444] hover:text-white";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${
        isSelected ? activeClasses : inactiveClasses
      } transition-all duration-300 ease-in-out`}
    >
      <span className="flex items-center gap-2">
        {capitalizeFirstLetter(label)}

        <AnimatePresence mode="wait">
          {isLoading && (
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
}
