import { useForm } from "@tanstack/react-form";
import { createFileRoute } from "@tanstack/react-router";
import clsx from "clsx";
import dayjs from "dayjs";

import Button from "../components/Button";
import Field from "../components/Field";
import { Header } from "../components/Header";
import Input from "../components/Input";
import TextArea from "../components/TextArea";

export const Route = createFileRoute("/write")({
  component: RouteComponent,
});

function RouteComponent() {
  const form = useForm({
    defaultValues: {
      date: dayjs().format("YYYY-MM-DD"),
      title: "",
      content: "",
    },
    onSubmit: ({ value }) => {
      console.log(value);
    },
  });

  return (
    <div>
      <Header title="기록 작성" prefix="back" />
      <form
        className="pb-[59px]"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <div
          className="flex flex-col gap-[32px] bg-local"
          style={{
            backgroundImage: `
linear-gradient(to right, var(--color-stone-200) 10px, transparent 10px),
linear-gradient(to left, var(--color-stone-200) 10px, transparent 10px),
repeating-linear-gradient(var(--color-stone-200), var(--color-stone-200) 31px, var(--color-stone-400) 31px, var(--color-stone-400) 32px)`,
          }}
        >
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
                <TextArea rows={1} placeholder="제목을 입력해 주세요." />
              </Field>
            )}
          />
          <form.Field
            name="content"
            children={(field) => (
              <Field label="내용" field={field}>
                <TextArea
                  className="min-h-[500px]"
                  placeholder="내용을 작성해주세요."
                />
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
