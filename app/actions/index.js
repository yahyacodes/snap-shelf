"use server";

import { signIn } from "../auth";

export async function socialLogin(formData) {
  const action = formData.get("action");
  await signIn(action, { redirectTo: "/create-snippet" });
}

export async function socialLogout() {}
