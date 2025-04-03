interface ButtonProps {
  title: string;
  onClick?: () => void;
  variation?: "default" | "outline";
}

export function Button({ title, onClick, variation = "default" }: ButtonProps) {
  const buttonClassName = `px-6 py-2 font-inter font-medium rounded-sm text-xs hover:cursor-pointer transition-all duration-300 ${
    variation === "outline"
      ? "bg-transparent border border-[#333333] text-white hover:bg-[#1a1a1a]"
      : "bg-white text-black hover:bg-[#999999]"
  }`;

  return (
    <button onClick={onClick} className={buttonClassName}>
      {title}
    </button>
  );
}
