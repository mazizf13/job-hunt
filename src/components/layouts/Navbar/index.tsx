"use client";

import MenuAuth from "@/components/organisms/MenuAuth";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const router = useRouter();

  const { data: session } = useSession();
  console.log(session);

  return (
    <header className="px-32 py-5 flex flex-row items-start justify-between sticky top-0 z-50 bg-white">
      <div className="inline-flex items-center gap-12">
        <Link href="/">
          <Image
            src={"/images/logo2.png"}
            alt="/images/logo2.png"
            width={170}
            height={36}
          />
        </Link>
        <div>
          <Link
            href={"/find-jobs"}
            className="font-medium text-gray-400 mr-4 cursor-pointer"
          >
            Find Jobs
          </Link>
          <Link
            href={"/find-companies"}
            className="font-medium text-gray-400 cursor-pointer"
          >
            Browse Company
          </Link>
        </div>
      </div>
      <div className="inline-flex items-center gap-4 h-8">
        {session ? (
          <MenuAuth />
        ) : (
          <>
            <Button onClick={() => router.push("/signin")} variant="link">
              Login
            </Button>
            <Button>Sign Up</Button>
          </>
        )}
      </div>
    </header>
  );
};
export default Navbar;
