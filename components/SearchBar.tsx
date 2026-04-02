"use client";

import { useState, useEffect } from "react";

export default function SearchBar({ setNotes }: any) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const delay = setTimeout(async () => {
      const res = await fetch(`/api/notes?q=${query}`);
      const data = await res.json();
      setNotes(data);
    }, 500);

    return () => clearTimeout(delay);
  }, [query]);

  return (
    <input
      placeholder="Search notes..."
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
