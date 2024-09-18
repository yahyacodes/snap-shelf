import { Github, SquareDashedBottomCode } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
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
          <div className="mr-6 mt-1 font-medium text-lg hover:text-warning cursor-pointer">
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
            <Link
              href="https://github.com/yahyacodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="text-white cursor-pointer hover:text-warning mt-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
