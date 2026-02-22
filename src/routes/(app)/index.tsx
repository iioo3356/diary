import { createFileRoute, Link } from "@tanstack/react-router";
import clsx from "clsx";
import { Pencil, Search } from "lucide-react";

import { Button, Calendar, Header } from "@/components";

export const Route = createFileRoute("/(app)/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Header
        title="달력"
        prefix={<Search />}
        suffix={
          <Link to="/write">
            <Pencil />
          </Link>
        }
      />
      <div className="relative pt-[16px] pb-[60px]">
        <Calendar
          diaryList={{
            "2026-01-23": [
              "개발 중 졸리다",
              "오짬 맛잇당",
              "날짜 누르면 모달 나오게 해야징",
              "4개까지만",
              "이건 숫자로 보이지롱",
            ],
            "2026-01-20": ["색 선택 기능 필요한가"],
          }}
        />
        <Link to="/write">
          <Button className={clsx(`fixed bottom-0 w-full max-w-lg`)}>
            기록하기
          </Button>
        </Link>
      </div>
    </div>
  );
}
