import { createRootRoute, Outlet } from "@tanstack/react-router";
import clsx from "clsx";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="bg-white w-screen">
      <div
        className={clsx(`w-full max-w-lg mx-auto min-h-screen bg-stone-100`)}
      >
        <Outlet />
      </div>
    </div>
  );
}
