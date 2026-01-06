import { useForm } from "@tanstack/react-form";
import { createFileRoute } from "@tanstack/react-router";
import clsx from "clsx";
import dayjs from "dayjs";

import Button from "../components/Button";
import Field from "../components/Field";
import Input from "../components/Input";
import TextArea from "../components/TextArea";

export const Route = createFileRoute("/write")({
  component: RouteComponent,
});

function RouteComponent() {
  const form = useForm({
    defaultValues: {
      date: dayjs().format("YYYY-MM-DD"),
      title: "일기",
      content: "오늘은...",
    },
    onSubmit: ({ value }) => {
      console.log(value);
    },
  });

  return (
    <div>
      <form
        className="p-[16px]"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <div className="flex flex-col gap-[16px]">
          <form.Field
            name="date"
            children={(field) => (
              <Field label="날짜" field={field}>
                <Input type="date" />
              </Field>
            )}
          />
          <form.Field
            name="title"
            children={(field) => (
              <Field label="제목" field={field}>
                <Input />
              </Field>
            )}
          />
          <form.Field
            name="content"
            children={(field) => (
              <Field label="내용" field={field}>
                <TextArea />
              </Field>
            )}
          />
        </div>
      </form>{" "}
      <Button
        onClick={form.handleSubmit}
        className={clsx(`fixed bottom-0 mx-auto w-full max-w-lg`)}
      >
        기록하기
      </Button>
    </div>
  );
}
