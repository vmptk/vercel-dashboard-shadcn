import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutGridIcon, RowsIcon } from "lucide-react";

export default function DashboardSwitch() {
  return (
    <TabsList className="grid min-w-24 grid-cols-2">
      <TabsTrigger value="grid">
        <LayoutGridIcon className="size-5" />
      </TabsTrigger>
      <TabsTrigger value="rows">
        <RowsIcon className="size-5" />
      </TabsTrigger>
    </TabsList>
  );
}
