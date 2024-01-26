import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ActivityIcon,
  ExternalLinkIcon,
  GitBranchIcon,
  GithubIcon,
  MoreHorizontalIcon,
} from "lucide-react";
import Link from "next/link";

interface Props {
  name: string;
  url: string;
  commit: string;
  timeAgo: string;
  branch: string;
}

export default function DashboardGridCard({
  name,
  url,
  commit,
  timeAgo,
  branch = "main",
}: Props) {
  return (
    <Link href="#">
      <Card className="group hover:bg-secondary relative transition-colors">
        <Button
          className="group-hover:opacity-100 duration-200 group-hover:translate-y-0 translate-y-1 opacity-0 transition-all absolute rounded-full size-9 p-0 -top-3 -right-3"
          size="sm"
          variant="default"
        >
          <ExternalLinkIcon className="size-3.5" />
        </Button>
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <div className="flex space-x-3">
              <Avatar className="size-9">
                <AvatarImage
                  src={`https://avatar.vercel.sh/${name}`}
                  alt={`@${name}`}
                />
                <AvatarFallback>P</AvatarFallback>
              </Avatar>
              <span className="flex flex-col space-y-0.5">
                <span className="font-normal leading-none text-base">
                  {name}
                </span>
                <span className="font-normal text-sm text-muted-foreground">
                  {url}
                </span>
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger>
                    <span className="rounded-full inline-block border border-muted-foreground p-1 border-white">
                      <ActivityIcon className="size-4 text-muted-foreground" />
                    </span>
                  </TooltipTrigger>
                  <TooltipContent className="text-sm max-w-[300px] text-center bg-primary text-muted font-normal">
                    Get detailed performance metrics by enabling Speed Insights.
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <Button variant="ghost" size="icon">
                <MoreHorizontalIcon />
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardFooter className="pt-4">
          <div className="space-y-1 text-sm">
            <p className="text-primary">{commit}</p>
            <p className="flex items-center text-muted-foreground">
              <GithubIcon className="fill-primary text-primary size-3.5 mr-1" />
              <span>{timeAgo} on </span>{" "}
              <GitBranchIcon className="mx-1 size-3" /> <code>{branch}</code>
            </p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
