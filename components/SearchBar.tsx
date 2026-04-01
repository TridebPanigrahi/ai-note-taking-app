"use client";

export default function SearchBar({ search, setSearch }: any) {
  return (
    <input
      placeholder="Search notes..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full border p-2 rounded"
    />
  );
}
