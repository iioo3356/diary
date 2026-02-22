import { useForm } from "@tanstack/react-form";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import clsx from "clsx";
import { useEffect } from "react";

import { useGetMe } from "@/api/hooks/member";
import { Button, Field, Form, Header, TextArea } from "@/components";

export const Route = createFileRoute("/auth/init")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const { data } = useGetMe();

  useEffect(() => {
    if (
      !data?.result?.memberState ||
      data.result.memberState !== "OAUTH_ONLY"
    ) {
      // TODO: 모달로 안내하기
      navigate({ to: "/auth/sign-in", replace: true });
    }
  }, [data, navigate]);

  const form = useForm({
    defaultValues: {
      secretKey: "",
      hint1: "",
      hint2: "",
    },
    onSubmit: ({ value }) => {
      console.log(value);
    },
  });

  // TODO: 스텝 형태로 UI 개선
  // TODO: 저장 눌렀을 떄 비밀 문구 한 번 더 입력 받기

  return (
    <div>
      <Header title="기본 정보 설정" />
      <Form className="min-h-[calc(100vh-49px)] pb-[91px]">
        <div className="px-[16px] leading-[32px]">
          블랙 로그는 암호화 기능을 제공하는 일기장 서비스입니다.
          <br />
          설정하신 비밀 문구를 통해 상세 내용이 암호화 및 복호화되며,
          <br />
          비밀 문구와 내용의 평문은 서버에 저장되지 않습니다.
          <br />
          <br />
          <b>
            따라서 비밀 문구를 분실하실 경우,
            <br />
            저희도 내용을 복구해드릴 수 없습니다.
          </b>
          <br />
          <br />
          비밀 문구를 기억할 수 있도록 힌트를 꼭 작성해 주세요.
          <br />
          <b>
            단, 힌트는 서버에 저장되므로
            <br />
            타인이 보더라도 유추할 수 없도록 신중하게 작성해 주세요.
          </b>
        </div>
        <form.Field
          name="secretKey"
          children={(field) => (
            <Field
              requiredMark
              label="비밀 문구를 입력해 주세요."
              field={field}
            >
              <TextArea
                rows={2}
                maxLength={64}
                placeholder={`비밀 문구는 12자 이상 입력해 주세요.\n복잡한 기호보다, 기억할 수 있는 긴 문장이 더 안전합니다.`}
              />
            </Field>
          )}
        />
        <div></div>
        <form.Field
          name="hint1"
          children={(field) => (
            <Field
              requiredMark
              label="힌트를 입력해 주세요.(1/2)"
              field={field}
            >
              <TextArea rows={1} placeholder="힌트를 입력해 주세요." />
            </Field>
          )}
        />
        <form.Field
          name="hint2"
          children={(field) => (
            <Field label="힌트를 입력해 주세요.(2/2)" field={field}>
              <TextArea rows={1} placeholder="힌트를 입력해 주세요." />
            </Field>
          )}
        />
      </Form>
      <Button
        onClick={form.handleSubmit}
        className={clsx(`fixed bottom-0 mx-auto w-full max-w-lg`)}
      >
        저장하기
      </Button>
    </div>
  );
}
