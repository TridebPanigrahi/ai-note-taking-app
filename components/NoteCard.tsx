export default function NoteCard({ note }: any) {
  return (
    <div className="p-4 border rounded-xl">
      <h2 className="font-bold">{note.title}</h2>
      <p>{note.content.slice(0, 100)}</p>
    </div>
  );
}
