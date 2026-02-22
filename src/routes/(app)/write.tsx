import { useForm } from "@tanstack/react-form";
import { createFileRoute } from "@tanstack/react-router";
import clsx from "clsx";
import dayjs from "dayjs";

import { Button, Field, Form, Header, Input, TextArea } from "@/components";

export const Route = createFileRoute("/(app)/write")({
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
      <Form className="pb-[59px]">
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
                className="min-h-[calc(100vh-(8*32px)-49px)]"
                placeholder="내용을 작성해주세요."
              />
            </Field>
          )}
        />
      </Form>
      <Button
        onClick={form.handleSubmit}
        className={clsx(`fixed bottom-0 mx-auto w-full max-w-lg`)}
      >
        기록하기
      </Button>
    </div>
  );
}
