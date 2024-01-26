import DashboardMobileMenu from "@/components/dashboard-mobile-menu";
import { Button } from "@/components/ui/button";
import { UserNav } from "@/components/user-nav";
import { BellIcon } from "lucide-react";
import Link from "next/link";

export default function DashboardLinks() {
  return (
    <div className="flex items-center">
      <div className="md:flex hidden items-center">
        <Link href="#">
          <Button
            variant="outline"
            size="sm"
            className="bg-secondary/20 font-normal text-muted-foreground hover:text-primary"
          >
            Feedback
          </Button>
        </Link>
        <div className="mx-2">
          <Link
            href="#"
            className="text-sm py-1 px-3 text-muted-foreground transition-colors hover:text-primary"
          >
            Changelog
          </Link>
          <Link
            href="#"
            className="text-sm py-1 px-3 text-muted-foreground transition-colors hover:text-primary"
          >
            Help
          </Link>
          <Link
            href="#"
            className="text-sm py-1 px-3 text-muted-foreground transition-colors hover:text-primary"
          >
            Docs
          </Link>
        </div>
      </div>
      <div className="gap-2 flex items-center">
        <Button
          variant="outline"
          size="icon"
          className="size-[32px] rounded-full"
        >
          <BellIcon className="size-4" />
        </Button>
        <UserNav />
        <DashboardMobileMenu />
      </div>
    </div>
  );
}
