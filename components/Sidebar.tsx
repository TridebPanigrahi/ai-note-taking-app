"use client";

import { Button } from "@/components/ui/button";
import { FileText, Plus } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 border-r p-4 flex flex-col gap-4">
      <h1 className="text-lg font-semibold">🧠 AI Notes</h1>

      <Button variant="secondary" className="justify-start">
        <Plus className="mr-2 h-4 w-4" />
        New Note
      </Button>

      <div className="space-y-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2 cursor-pointer hover:text-foreground">
          <FileText size={16} />
          All Notes
        </div>
      </div>
    </div>
  );
}
