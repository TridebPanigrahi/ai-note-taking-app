import { openai } from "@/lib/ai";

export async function POST(req: Request) {
  try {
    const { content, type } = await req.json();

    if (!content) {
      return new Response("Content is required", { status: 400 });
    }

    let prompt = "";

    switch (type) {
      case "summary":
        prompt = `Summarize this note in 3 concise lines:\n${content}`;
        break;

      case "improve":
        prompt = `Improve grammar, clarity, and readability:\n${content}`;
        break;

      case "tags":
        prompt = `Generate 5 short tags (comma separated):\n${content}`;
        break;

      default:
        return new Response("Invalid AI type", { status: 400 });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    const result = response.choices[0]?.message?.content || "";

    return Response.json({ result });
  } catch (error) {
    console.error(error);
    return new Response("AI Error", { status: 500 });
  }
}
