import type { RouteHandle } from "../../../types/common.types";

interface Match {
  handle?: unknown;
}
export function getRouteTitle(matches: Match[]): string | undefined {
  const matched = [...matches]
    .reverse()
    .find((match) => (match.handle as RouteHandle | undefined)?.title);

  return (matched?.handle as RouteHandle | undefined)?.title;
}
