import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { NavbarMenuToggle } from "@nextui-org/react";
import React, { useState } from "react";

type Props = {};

const MobileMenu = async (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = await currentUser();
  return (
    <>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      {user ? <UserButton afterSignOutUrl="/" /> : null}
    </>
  );
};

export default MobileMenu;
