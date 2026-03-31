import { prisma } from "@/lib/db";
import { getUser } from "@/lib/auth";

export async function GET() {
  const userId = getUser();

  const notes = await prisma.note.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });

  return Response.json(notes);
}

export async function POST(req: Request) {
  const userId = getUser();
  const body = await req.json();

  const note = await prisma.note.create({
    data: {
      userId,
      title: body.title,
      content: body.content,
      tags: [],
    },
  });

  return Response.json(note);
}
