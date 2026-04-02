"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.ok) {
      router.push("/notes");
    } else {
      alert("Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
      <input {...register("email")} placeholder="Email" />
      <input {...register("password")} type="password" placeholder="Password" />

      <button type="submit">Login</button>
    </form>
  );
}
