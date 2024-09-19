"use client";

import { Github, SquareDashedBottomCode } from "lucide-react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { status } = useSession();

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  const handleSignIn = () => {
    signIn("google", { callbackUrl: "/create-snippet" });
  };

  return (
    <div className="container mx-auto navbar">
      <div className="flex-1">
        <Link href={"/"} className="text-2xl font-bold text-warning flex gap-1">
          <SquareDashedBottomCode className="h-8 w-8" />
          SnapShelf
        </Link>
      </div>
      <div className="flex-none hidden md:block">
        <div className="menu menu-horizontal px-1">
          <div className="mr-6 mt-2 font-medium text-lg hover:text-warning cursor-pointer">
            <Link
              href={"/explore"}
              className="text-white cursor-pointer hover:text-warning"
            >
              Explore
            </Link>

            <Link
              href={"/login"}
              className="text-white cursor-pointer hover:text-warning mx-6"
            >
              Create a snippet
            </Link>
          </div>
          <div>
            {status === "authenticated" ? (
              <button
                className="btn btn-warning py-1 px-6"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            ) : (
              <button
                className="btn btn-warning py-1 px-6"
                onClick={handleSignIn}
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
