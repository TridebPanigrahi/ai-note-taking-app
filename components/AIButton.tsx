"use client";

export default function AIButton({ type, content, setContent }: any) {
  const handle = async () => {
    const res = await fetch(`/api/ai/${type}`, {
      method: "POST",
      body: JSON.stringify({ content }),
    });

    const data = await res.json();
    setContent(data.result);
  };

  return <button onClick={handle}>AI {type}</button>;
}
