import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

import { useGetMe } from "@/api/hooks/member";

export const Route = createFileRoute("/auth/google")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();

  const { data } = useGetMe();

  useEffect(() => {
    console.log(data);
    if (data?.result?.memberState === "OAUTH_ONLY") {
      navigate({ to: "/auth/init", replace: true });
    } else if (data?.result?.memberState === "NORMAL") {
      // 메인 화면 이동
    } else {
      // 중지 및 탈퇴 페이지로 이동
    }
  }, [data]);

  return <div></div>;
}
