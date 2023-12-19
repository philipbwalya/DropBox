import { UserButton } from "@clerk/nextjs";
import { SignedOut } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="flex items-center space-x-2">
        <div className="bg-[#0160FE] w-fit">
          <Image
            src="https://www.shareicon.net/data/128x128/2015/11/08/668675_box_512x512.png"
            alt="logo"
            className="invert"
            height={45}
            width={45}
          />
        </div>
        <h1 className="font-bold text-2xl">Dropbox</h1>
      </Link>

      <div className="px-5 flex space-x-2 items-center">
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />

        <SignedOut>
          <SignInButton afterSignInUrl="/dashboard" mode="modal" />
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
