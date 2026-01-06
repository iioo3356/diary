import { createFileRoute } from "@tanstack/react-router";
import clsx from "clsx";

import Button from "../components/Button";
import { Calendar } from "../components/Calendar";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="relative pb-[60px]">
      <div>검색</div>
      <Calendar />
      <Button className={clsx(`fixed bottom-0 w-full max-w-lg`)}>
        기록하기
      </Button>
    </div>
  );
}
