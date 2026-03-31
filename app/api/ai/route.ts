import { openai } from "@/lib/ai";

export async function POST(req: Request) {
  const { content, type } = await req.json();

  let prompt = "";

  if (type === "summary") {
    prompt = `Summarize in 3 lines: ${content}`;
  }

  if (type === "improve") {
    prompt = `Improve grammar and clarity: ${content}`;
  }

  if (type === "tags") {
    prompt = `Generate 5 tags: ${content}`;
  }

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });

  return Response.json({
    result: response.choices[0].message.content,
  });
}
