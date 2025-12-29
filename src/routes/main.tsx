import { createFileRoute } from "@tanstack/react-router";

import { Calendar } from "../components/Calendar";

export const Route = createFileRoute("/main")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div>검색</div>
      <Calendar />
      <div>+</div>
    </div>
  );
}
