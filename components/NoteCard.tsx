import Link from "next/link";

export default function NoteCard({ note }: any) {
  return (
    <Link href={`/dashboard/notes/${note.id}`}>
      <div className="p-4 border rounded-xl hover:shadow-lg cursor-pointer">
        <h2 className="font-bold text-lg">{note.title}</h2>
        <p className="text-sm text-gray-500 line-clamp-2">
          {note.content}
        </p>
      </div>
    </Link>
  );
}