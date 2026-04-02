"use client";

import { Button } from "@/components/ui/button";

export default function EditorToolbar({ content, setContent }: any) {
  const callAI = async (type: string) => {
    const res = await fetch(`/api/ai/${type}`, {
      method: "POST",
      body: JSON.stringify({ content }),
    });

    const data = await res.json();
    setContent(data.result);
  };

  return (
    <div className="flex gap-2 mb-4">
      <Button variant="outline" onClick={() => callAI("summary")}>
        ✨ Summarize
      </Button>

      <Button variant="outline" onClick={() => callAI("improve")}>
        🧠 Improve
      </Button>

      <Button variant="outline" onClick={() => callAI("tags")}>
        🏷 Tags
      </Button>
    </div>
  );
}
