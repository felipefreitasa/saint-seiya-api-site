interface ButtonProps {
  title: string;
  onClick?: () => void;
}

export function Button({ title, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 bg-white text-black font-inter font-medium rounded-l-full rounded-r-full text-xs hover:bg-[#999999] hover:cursor-pointer"
    >
      {title}
    </button>
  );
}
