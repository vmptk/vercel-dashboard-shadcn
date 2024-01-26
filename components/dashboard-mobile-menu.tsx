import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { MenuIcon } from "lucide-react";

export default function DashboardMobileMenu() {
  return (
    <Drawer>
      <DrawerTrigger className="md:hidden block">
        <MenuIcon className="size-5 ml-1 fill-primary" />
      </DrawerTrigger>
      <DrawerContent className="bg-card">
        <div className="w-full divide-white">
          <DrawerTitle className="px-6 flex py-4 justify-between">
            <span className="text-muted-foreground text-base font-normal">
              user@name.com
            </span>
            <Avatar className="size-5">
              <AvatarImage
                src="https://avatar.vercel.sh/username"
                alt="@username"
              />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
          </DrawerTitle>
          <div className="px-6">
            <hr />
            <Button variant="ghost" size="lg" className="w-full">
              Dashboard
            </Button>
            <hr />
            <Button variant="ghost" size="lg" className="w-full">
              Settings
            </Button>
            <hr />
            <Button variant="ghost" size="lg" className="w-full">
              Log out
            </Button>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
