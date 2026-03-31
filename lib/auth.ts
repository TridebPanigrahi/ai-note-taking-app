import { auth } from "@clerk/nextjs";

export const getUser = () => {
  const { userId } = auth();
  if (!userId) throw new Error("Unauthorized");
  return userId;
};
