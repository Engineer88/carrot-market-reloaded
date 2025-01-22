"use client";

import { useFormStatus } from "react-dom";

interface ButtonProps {

  text: string;
}

export default function FormButton({ text }: ButtonProps) {
  const {pending} = useFormStatus();
  return (
    <button
      disabled={pending}
      className="primary-btn h-10 disabled:bg-neutral-500"
    >
      {pending ? "Loading......" : text}
    </button>
  );
}
