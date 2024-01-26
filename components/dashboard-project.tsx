import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronsUpDownIcon, PlusCircleIcon } from "lucide-react";

export default function DashboardProject() {
  return (
    <>
      <Avatar className="size-5">
        <AvatarImage src="https://avatar.vercel.sh/username" alt="@username" />
        <AvatarFallback>UN</AvatarFallback>
      </Avatar>
      <span className="md:mx-3 ml-3 mr-1 text-sm">username</span>
      <Badge
        variant="secondary"
        className="md:block hidden text-xs px-2 font-normal mr-1"
      >
        Hobby
      </Badge>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="px-2">
            <ChevronsUpDownIcon className="text-muted-foreground size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[200px] space-y-2">
          <DropdownMenuLabel className="font-normal">
            Projects
          </DropdownMenuLabel>
          <DropdownMenuItem className="space-x-3">
            <Avatar className="size-4">
              <AvatarImage src="https://avatar.vercel.sh/tesla" alt="@tesla" />
              <AvatarFallback>T</AvatarFallback>
            </Avatar>
            <span>Tesla</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="space-x-3">
            <Avatar className="size-4">
              <AvatarImage
                src="https://avatar.vercel.sh/spacex"
                alt="@spacex"
              />
              <AvatarFallback>SX</AvatarFallback>
            </Avatar>
            <span>Space X</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="space-x-3">
            <PlusCircleIcon className="size-4" />
            <span>Create Project</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
