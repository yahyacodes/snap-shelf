"use client";

import { Search, Code, Share2, Bookmark, Github } from "lucide-react";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6 flex items-center justify-center">
            <div className="flex flex-col items-center space-y-8 text-center max-w-3xl">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none max-w-[900px]">
                  Share and Discover
                  <br />
                  Code Snippets with Ease
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover, and share code snippets from developers worldwide.
                  Streamline your coding process and learn from the community.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={"/login"}>
                  <button className="btn btn-warning">
                    Share a Snippet
                    <Share2 className="ml-2 h-4 w-4" />
                  </button>
                </Link>
                <Link href={"/explore"}>
                  <button variant="outline" className="btn btn-bordered">
                    Explore Snippets
                    <Code className="ml-2 h-4 w-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 items-center">
              <div className="flex flex-col space-y-2 border border-gray-700 p-6 rounded-lg">
                <div className="flex gap-4 mb-2">
                  <Code className="h-8 w-8 text-warning" />
                  <h2 className="text-2xl font-bold text-white">
                    Diverse Snippets
                  </h2>
                </div>
                <p className="text-gray-400">
                  Access a wide range of code snippets for various programming
                  languages and tasks.
                </p>
              </div>
              <div className="flex flex-col space-y-2 border border-gray-700 p-6 rounded-lg">
                <div className="flex gap-4 mb-2">
                  <Share2 className="h-8 w-8 text-warning" />
                  <h2 className="text-2xl font-bold text-white">
                    Easy Sharing
                  </h2>
                </div>
                <p className="text-gray-400">
                  Share your own snippets with the community and get feedback
                  from fellow developers.
                </p>
              </div>
              <div className="flex flex-col space-y-2 border border-gray-700 p-6 rounded-lg">
                <div className="flex gap-4 mb-2">
                  <Bookmark className="h-8 w-8 text-warning" />
                  <h2 className="text-2xl font-bold text-white">
                    Save Favorites
                  </h2>
                </div>
                <p className=" text-gray-400">
                  Bookmark useful snippets for quick access and organize your
                  coding resources.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Hero;
