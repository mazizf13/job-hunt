import { signOut, useSession } from "next-auth/react";
import React, { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BiSolidDownArrow } from "react-icons/bi";
import { IoIosLogOut } from "react-icons/io";

interface MenuAuthProps {}

const MenuAuth: FC<MenuAuthProps> = () => {
  const { data: session } = useSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="inline-flex items-center gap-1 cursor-pointer">
          <div className="font-semibold text-primary">
            Hi, {session?.user?.name}
          </div>
          <BiSolidDownArrow />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => signOut()}
          className="text-red-500 font-semibold cursor-pointer"
        >
          <IoIosLogOut className="" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MenuAuth;
