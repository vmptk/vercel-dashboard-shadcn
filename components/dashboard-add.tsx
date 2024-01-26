import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";

export default function DashboardAdd() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="default" className="md:min-w-32 md:px-2 px-4">
          <span className="md:inline-block hidden mr-2">Add New...</span>
          <ChevronDownIcon className="text-secondary size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[88px]">
        <DropdownMenuItem className="py-3">Projects</DropdownMenuItem>
        <DropdownMenuItem className="py-3">Domain</DropdownMenuItem>
        <DropdownMenuItem className="py-3">Storage</DropdownMenuItem>
        <DropdownMenuItem className="py-3">Team</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
