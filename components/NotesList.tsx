"use client";

import { useEffect, useState } from "react";
import NoteItem from "./NoteItem";
import { Input } from "@/components/ui/input";

export default function NotesList() {
  const [notes, setNotes] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const delay = setTimeout(async () => {
      const res = await fetch(`/api/notes?q=${query}`);
      const data = await res.json();
      setNotes(data);
    }, 400);

    return () => clearTimeout(delay);
  }, [query]);

  return (
    <div className="p-4 space-y-3">
      <Input
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="space-y-2">
        {notes.map((note: any) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
}
