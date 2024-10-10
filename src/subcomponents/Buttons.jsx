import Link from "next/link";

export const PrimaryButton = ({ text, className = "", onClick, type }) => (
  <button type={type || "button"} onClick={onClick} className={`bg-brand px-5 py-2 rounded-md text-white ${className}`}>
    {text}
  </button>
);
