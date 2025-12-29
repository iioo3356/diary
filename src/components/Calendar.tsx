import clsx from "clsx";
import dayjs, { Dayjs } from "dayjs";
import { useMemo, useState } from "react";

export const Calendar = () => {
  const currentDay = dayjs();

  const [selectedBasics, setSelectedBasics] = useState(
    currentDay.set("date", 1),
  );

  const calendarWeeks = useMemo(() => {
    const startOfMonth = selectedBasics.startOf("month"); // 선택된 달의 첫번째 날
    const endOfMonth = selectedBasics.endOf("month"); // 선택된 달의 마지막 날

    const calendarStart = startOfMonth.startOf("week"); // 첫번째 날이 있는 주의 일요일
    const calendarEnd = endOfMonth.endOf("week"); // 마지막 날이 있는 주의 토요일

    const weeks: Dayjs[][] = [];
    let current = calendarStart;

    while (!current.isAfter(calendarEnd, "day")) {
      const week: Dayjs[] = [];

      for (let i = 0; i < 7; i++) {
        // 일 ~ 토 순서로 채움
        week.push(current);
        current = current.add(1, "day");
      }
      weeks.push(week);
    }

    return weeks;
  }, [selectedBasics]);

  // TODO: 오늘로 이동하는 버튼
  // TODO: 전체 월 선택 버튼
  // TODO: 한국 공휴일 연동하기

  return (
    <div className="flex flex-col gap-[16px] items-center">
      <div className="flex gap-[8px] items-center">
        <button
          className="!p-[4px]"
          onClick={() => {
            setSelectedBasics((prev) => prev.add(-1, "month"));
          }}
        >
          {"<"}
        </button>
        <div className="font-bold text-[20px]">
          {selectedBasics.format("YY년 M월")}
        </div>
        <button
          onClick={() => {
            setSelectedBasics((prev) => prev.add(1, "month"));
          }}
        >
          {">"}
        </button>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex text-[12px]">
          <div className="w-full text-center text-red-600">일</div>
          <div className="w-full text-center">월</div>
          <div className="w-full text-center">화</div>
          <div className="w-full text-center">수</div>
          <div className="w-full text-center">목</div>
          <div className="w-full text-center">금</div>
          <div className="w-full text-center text-blue-600">토</div>
        </div>
        {calendarWeeks.map((week, wIdx) => (
          <div
            key={wIdx}
            className="flex w-full border-t border-stone-400 last:border-b"
          >
            {week.map((day, dIdx) => (
              <div
                key={dIdx}
                className={clsx(
                  "w-full h-[120px] border-r border-stone-300 first:border-l text-center",
                )}
              >
                <div
                  className={clsx(
                    "text-[12px]",
                    day.month() === selectedBasics.month()
                      ? "font-bold"
                      : "font-light",
                    day.day() === 0
                      ? "text-red-600"
                      : day.day() === 6
                        ? "text-blue-600"
                        : "text-black",
                  )}
                >
                  {day.date()}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
