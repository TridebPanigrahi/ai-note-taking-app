"use client";

import dynamic from "next/dynamic";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import EditorToolbar from "./EditorToolbar";

const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
});

type FormData = {
  title: string;
  content: string;
};

export default function NoteEditor({ defaultValues }: any) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      title: defaultValues?.title || "",
      content: defaultValues?.content || "",
    },
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);

      const res = await fetch("/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to save");

      reset();
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-3xl mx-auto space-y-4"
    >
      {/* TITLE */}
      <input
        {...register("title", { required: "Title is required" })}
        placeholder="Untitled"
        className="text-4xl font-bold w-full outline-none"
      />

      {errors.title && (
        <p className="text-red-500 text-sm">{errors.title.message}</p>
      )}

      {/* TOOLBAR (AI) */}
      <Controller
        name="content"
        control={control}
        rules={{ required: "Content is required" }}
        render={({ field }) => (
          <>
            <EditorToolbar content={field.value} setContent={field.onChange} />

            {/* RICH EDITOR */}
            <ReactQuill value={field.value} onChange={field.onChange} />
          </>
        )}
      />

      {errors.content && (
        <p className="text-red-500 text-sm">{errors.content.message}</p>
      )}

      {/* SAVE BUTTON */}
      <div className="flex justify-end">
        <Button type="submit" disabled={loading}>
          {loading ? "Saving..." : "Save"}
        </Button>
      </div>
    </form>
  );
}
