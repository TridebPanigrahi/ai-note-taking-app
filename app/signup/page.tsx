"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function Signup() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
    });

    router.push("/login");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
      <input {...register("email")} placeholder="Email" />
      <input {...register("password")} placeholder="Password" type="password" />

      <button type="submit">Signup</button>
    </form>
  );
}
