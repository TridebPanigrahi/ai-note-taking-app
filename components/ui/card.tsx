export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="border rounded-xl p-4 shadow-sm bg-white dark:bg-zinc-900">
      {children}
    </div>
  );
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
