"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const PrimaryButton = ({ text, className = "", onClick, type }) => (
  <button
    type={type || "button"}
    onClick={onClick}
    className={`bg-brand px-5 py-2 rounded-md text-white ${className}`}
  >
    {text}
  </button>
);

export const BackButton = ({ className }) => {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className={`bg-brand px-5 py-2 rounded-md text-white flex items-center gap-2 ${className} mb-3`}
    >
      <ArrowLeft className="w-4 h-4" />
      <span>Back</span>
    </button>
  );
};
