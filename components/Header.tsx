import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="flex items-center">
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
      <UserButton afterSignOutUrl="/" />
    </header>
  );
}

export default Header;
