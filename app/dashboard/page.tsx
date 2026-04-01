"use client";

import { useEffect, useState } from "react";
import NoteCard from "@/components/NoteCard";
import SearchBar from "@/components/SearchBar";

export default function Dashboard() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const createNote = async () => {
    const res = await fetch("/api/notes", {
      method: "POST",
      body: JSON.stringify({
        title: "New Note",
        content: "",
      }),
    });

    const newNote = await res.json();
    window.location.href = `/dashboard/notes/${newNote.id}`;
  };

  const filteredNotes = notes.filter((note: any) =>
    note.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* <button onClick={createNote}>+ New Note</button> */}
      <SearchBar search={search} setSearch={setSearch} />

      {filteredNotes.map((note: any) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
}
