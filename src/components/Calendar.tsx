import clsx from "clsx";
import dayjs, { Dayjs } from "dayjs";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";

export const Calendar = ({
  diaryList,
}: {
  diaryList?: { [key: string]: string[] | null };
}) => {
  const currentDay = dayjs().set("date", 1);

  const [selectedBasics, setSelectedBasics] = useState(currentDay);

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

  const handleOnPrev = () => {
    setSelectedBasics((prev) => prev.add(-1, "month"));
  };

  const handleOnGoToday = () => {
    setSelectedBasics(currentDay);
  };

  const handleOnNext = () => {
    setSelectedBasics((prev) => prev.add(1, "month"));
  };

  // TODO: 전체 월 선택 버튼
  // TODO: 한국 공휴일 연동하기

  return (
    <div className="flex flex-col gap-[16px] items-center">
      <div className="flex justify-between w-full px-[16px]">
        <div className="w-[30px]">&nbsp;</div>
        <div className="flex gap-[8px] items-center">
          <button className="!p-[4px]" onClick={handleOnPrev}>
            <ChevronLeft />
          </button>
          <div className="font-bold text-[20px] w-[100px] text-center">
            {selectedBasics.format("YY년 M월")}
          </div>
          <button onClick={handleOnNext}>
            <ChevronRight />
          </button>
        </div>
        <button
          className="w-[30px] text-right font-semibold text-stone-600 text-[14px]"
          onClick={handleOnGoToday}
        >
          오늘
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
                  "w-full h-[120px] flex flex-col  border-r border-stone-300 first:border-l text-center",
                  // "hover:bg-stone-200/50",
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
                <button
                  className={clsx(
                    "h-full cursor-pointer hover:bg-stone-200/50",
                    "flex flex-col gap-[2px]",
                  )}
                >
                  {diaryList?.[day.format("YYYY-MM-DD")]
                    ?.slice(0, 4)
                    ?.map((diary, index) => (
                      <div
                        className={clsx(
                          index % 2 === 0 ? "bg-stone-200" : "bg-stone-300",
                          "text-[13px] pl-[2px] text-left line-clamp-1",
                        )}
                      >
                        {diary}
                      </div>
                    ))}
                  {(diaryList?.[day.format("YYYY-MM-DD")] || []).length > 4 && (
                    <div className="text-[12px] text-right">
                      +
                      {(diaryList?.[day.format("YYYY-MM-DD")] || []).length - 4}
                    </div>
                  )}
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
