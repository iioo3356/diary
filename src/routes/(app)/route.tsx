import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

import { useGetMe } from "@/api/hooks/member";

export const Route = createFileRoute("/(app)")({
  component: AppRouteComponent,
});

function AppRouteComponent() {
  const { data } = useGetMe();
  const navigate = useNavigate();

  useEffect(() => {
    if (!data?.result?.memberState || data.result.memberState !== "NORMAL") {
      // TODO: 모달로 안내하기
      navigate({ to: "/auth/sign-in", replace: true });
    }
  }, [data, navigate]);

  return (
    <div className="pt-[49px]">
      <Outlet />
    </div>
  );
}
