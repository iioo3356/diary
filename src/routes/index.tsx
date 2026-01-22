import { createFileRoute, Link } from "@tanstack/react-router";
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
  );
}
