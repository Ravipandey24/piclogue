"use client";

import { Avatar } from "@nextui-org/avatar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { User } from "@supabase/auth-helpers-nextjs";
import { getSessionUser, supabaseSignOut } from "@/utils/api/auth";
import { useRouter } from "next/navigation";

const UserDropdown = ({}) => {
  const Router = useRouter();
  const [isPendingAuth, setPendingAuth] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    getSessionUser().then(({ user }) => {
      setUser(user);
      setPendingAuth(false);
    });
  }, []);

  if (isPendingAuth) {
    return;
  }

  if (!user) {
    return (
      <Button
        onClick={() => {
          Router.push("/login");
        }}
      >
        Sign In
      </Button>
    );
  }

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          isIconOnly
          variant="light"
          customVariant="ghost"
          className="p-0"
        >
          <Avatar
            className="h-8 w-8"
            showFallback
            src="https://images.unsplash.com/broken"
          />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        variant="faded"
        aria-label="Dropdown menu with description"
        disabledKeys={["email"]}
      >
        <DropdownSection aria-label="email" showDivider>
          <DropdownItem key="email">{user.email}</DropdownItem>
        </DropdownSection>
        <DropdownSection aria-label="Actions" showDivider>
          <DropdownItem key="copy">Copy link</DropdownItem>
          <DropdownItem key="edit">Edit file</DropdownItem>
        </DropdownSection>
        <DropdownSection aria-label="logout">
          <DropdownItem
            key="delete"
            className="text-danger"
            color="danger"
            onClick={() => {
              supabaseSignOut().then(() => {
                Router.push('/');
              });
            }}
          >
            Log Out
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};

export default UserDropdown;
