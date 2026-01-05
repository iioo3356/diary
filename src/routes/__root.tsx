import { createRootRoute, Outlet } from "@tanstack/react-router";

import { MAX_SCREEN_WIDTH } from "../utils/style-utils";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="bg-stone-200 w-screen">
      <div
        className={`w-full max-w-[${MAX_SCREEN_WIDTH}] mx-auto min-h-screen bg-stone-100`}
      >
        <Outlet />
      </div>
    </div>
  );
}
