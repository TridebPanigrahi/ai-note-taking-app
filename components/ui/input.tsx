import * as React from "react";

export function Input({
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`border rounded-md px-3 py-2 w-full outline-none focus:ring-2 focus:ring-black ${className}`}
      {...props}
    />
  );
}
