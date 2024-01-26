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

export default function DashboardRowCard({
  name,
  url,
  commit,
  timeAgo,
  branch = "main",
}: Props) {
  return (
    <div className="pb-2">
      <p className="flex pb-3 items-center text-sm leading-none text-primary">
        <GithubIcon className="fill-primary text-primary size-3.5 mr-1" />
        <span>username/{name} </span>{" "}
        <MoreHorizontalIcon className="mx-1 size-4" />
      </p>
      <Card className="group hover:bg-secondary relative transition-colors">
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
                <Link
                  href="#"
                  className="font-normal hover:underline leading-none text-base"
                >
                  {name}
                </Link>
                <Link
                  href="#"
                  className="hover:underline font-normal text-sm text-muted-foreground"
                >
                  {url}
                </Link>
              </span>
            </div>
            <div className="space-y-1 font-normal md:block hidden text-sm">
              <Link href="#" className="hover:underline text-primary">
                {commit}
              </Link>
              <p className="flex items-center text-muted-foreground">
                <GithubIcon className="fill-primary text-primary size-3.5 mr-1" />
                <span>{timeAgo} on </span>{" "}
                <GitBranchIcon className="mx-1 size-3" /> <code>{branch}</code>
              </p>
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
        <CardFooter className="pt-4 md:hidden block">
          <div className="space-y-1 text-sm">
            <Link href="#" className="hover:underline text-primary">
              {commit}
            </Link>
            <p className="flex items-center text-muted-foreground">
              <span>{timeAgo} on </span>{" "}
              <GitBranchIcon className="mx-1 size-3" /> <code>{branch}</code>
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
