import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export default function DashboardSearch() {
  return (
    <div className="relative flex w-full items-center gap-1.5">
      <SearchIcon className="size-5 absolute text-muted-foreground left-4" />
      <Input
        id="search"
        placeholder="Search..."
        className="bg-secondary/20 p-5 pl-12 w-full"
      />
    </div>
  );
}
