import { createFileRoute } from "@tanstack/react-router";
import clsx from "clsx";

import Button from "../components/Button";
import { Calendar } from "../components/Calendar";
import { MAX_SCREEN_WIDTH } from "../utils/style-utils";

export const Route = createFileRoute("/main")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="relative pb-[60px]">
      <div>검색</div>
      <Calendar />
      <Button
        className={clsx(`fixed bottom-0 w-full max-w-[${MAX_SCREEN_WIDTH}]`)}
      >
        기록하기
      </Button>
    </div>
  );
}
