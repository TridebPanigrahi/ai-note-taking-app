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
    <button onClick={handleClick} className="btn">
      AI {type}
    </button>
  );
}