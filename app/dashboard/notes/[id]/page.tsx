"use client";

import { useEffect, useState } from "react";
import AIButton from "@/components/AIButton";

export default function NoteEditor({ params }: any) {
  const [note, setNote] = useState<any>(null);

  useEffect(() => {
    fetch("/api/notes")
      .then(res => res.json())
      .then(data => {
        const found = data.find((n: any) => n.id === params.id);
        setNote(found);
      });
  }, []);

  const updateNote = async () => {
    await fetch(`/api/notes/${note.id}`, {
      method: "PUT",
      body: JSON.stringify(note),
    });
  };
  

  if (!note) return <div>Loading...</div>;

  return (
    <div className="p-6 space-y-4">
      <input
        className="w-full text-xl font-bold border p-2"
        value={note.title}
        onChange={e => setNote({ ...note, title: e.target.value })}
      />

      <textarea
        className="w-full h-40 border p-2"
        value={note.content}
        onChange={e => setNote({ ...note, content: e.target.value })}
      />

      <div className="flex gap-2">
        <AIButton type="summary" content={note.content} onResult={(res:any)=>alert(res)} />
        <AIButton type="improve" content={note.content} onResult={(res:any)=>setNote({...note, content: res})} />
        <AIButton type="tags" content={note.content} onResult={(res:any)=>alert(res)} />
      </div>

      <button onClick={updateNote} className="bg-black text-white px-4 py-2 rounded">
        Save
      </button>
    </div>
  );
}