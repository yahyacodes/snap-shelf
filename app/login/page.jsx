"use client";

import { Chrome } from "lucide-react";
import React from "react";
import { signIn } from "next-auth/react";

const SignInBtn = () => {
  const handleSignIn = () => {
    signIn("google", { callbackUrl: "/create-snippet" });
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <button onClick={handleSignIn} className="btn btn-warning flex gap-2">
        <Chrome />
        Sign in with Google
      </button>
    </div>
  );
};

export default SignInBtn;
