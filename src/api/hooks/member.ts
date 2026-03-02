import { useMutation, useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import type {
  ApiResponseMemberResponse,
  ApiResponseUnit,
  PostMeSecretRequest,
} from "../model";
import request from "../request";
import { apiRoutes } from "../routes";

export const useGetMe = () =>
  useQuery<ApiResponseMemberResponse>({
    queryKey: [apiRoutes.membersMe],
    queryFn: () => request.get(apiRoutes.membersMe),
  });

export const usePostMeSecret = () => {
  return useMutation<ApiResponseUnit, AxiosError, PostMeSecretRequest>({
    mutationFn: (data) => request.post(apiRoutes.membersMeSecret, data),
  });
};
