import Link from "next/link";
import { NavigMenu } from "./NavigMenu";

const Navbar = () => {
  return (
    <div className="hidden lg:flex justify-between items-center bg-black text-pink-500 py-4 px-32">
      <Link href="/">
        <h1 className="font-bold font-thunder text-7xl uppercase tracking-wide text-center">
          Groven.
        </h1>
      </Link>
      <div className="flex justify-center items-center gap-x-6 font-thunder text-xl font-medium">
        <NavigMenu />
        <Link href="/services">Services</Link>
        <Link href="/projects">Projects</Link>
        <Link href="#">Blog</Link>
      </div>
    </div>
  );
};

export default Navbar;
