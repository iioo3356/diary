import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="bg-stone-200 w-screen">
      <div className="w-full max-w-[500px] mx-auto min-h-screen bg-stone-100">
        <Outlet />
      </div>
    </div>
  );
}
