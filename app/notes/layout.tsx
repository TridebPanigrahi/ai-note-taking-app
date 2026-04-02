import Sidebar from "@/components/Sidebar";
import NotesList from "@/components/NotesList";

export default function Layout({ children }: any) {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Notes List */}
      <div className="w-80 border-r hidden md:block">
        <NotesList />
      </div>

      {/* Editor */}
      <main className="flex-1 overflow-y-auto p-6">{children}</main>
    </div>
  );
}
