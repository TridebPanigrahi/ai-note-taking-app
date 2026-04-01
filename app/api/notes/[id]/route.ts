import { prisma } from "@/lib/db";
import { getUser } from "@/lib/auth";

// UPDATE note
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const userId = getUser();
  const body = await req.json();

  const note = await prisma.note.update({
    where: { id: params.id, userId },
    data: {
      title: body.title,
      content: body.content,
      tags: body.tags || [],
    },
  });

  return Response.json(note);
}

// DELETE note
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const userId = getUser();

  await prisma.note.delete({
    where: { id: params.id, userId },
  });

  return Response.json({ success: true });
}