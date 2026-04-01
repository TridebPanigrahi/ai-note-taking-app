export default function AIButton({ type, content, onResult }: any) {
  const handleClick = async () => {
    const res = await fetch("/api/ai", {
      method: "POST",
      body: JSON.stringify({ content, type }),
    });

    const data = await res.json();
    onResult(data.result);
  };

  return (
    <button
      onClick={handleClick}
      className="px-3 py-1 bg-blue-500 text-white rounded"
    >
      AI {type}
    </button>
  );
}
