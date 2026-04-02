"use client";

import { useEffect, useState } from "react";
import NoteCard from "@/components/NoteCard";
import { redirect } from "next/navigation";
import { getUserFromCookie } from "@/lib/getUser";

export default function NotesPage() {
  const [notes, setNotes] = useState([]);
  const user = getUserFromCookie();

  useEffect(() => {
    fetch("/api/notes")
      .then((res) => res.json())
      .then(setNotes);
  }, []);

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="grid gap-4">
      {notes.map((note: any) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
}
