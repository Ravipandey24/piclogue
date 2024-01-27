import { Link } from "@nextui-org/link";
import { NextLogo, SupabaseLogo } from "../Icons";
import { NavConfig } from "@/lib/config";
import UserDropdown from "../widgets/UserDropdown";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="mx-auto container px-8 flex h-16 items-center">
        <Link href="/" className="items-center flex">
          <h2 className={`inline-block text-2xl ${NavConfig.headingFont.className}`}>
            {NavConfig.name}
          </h2>
          <span className="sr-only">Home</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <UserDropdown></UserDropdown>
          </nav>
        </div>
      </div>
    </header>
  )
}
