export default function NoteCard({ note }: any) {
  return (
    <div className="p-4 border rounded-xl shadow-sm">
      <h2 className="font-bold text-lg">{note.title}</h2>
      <p className="text-sm text-gray-500 line-clamp-2">{note.content}</p>
    </div>
  );
}
