import { useQuery } from "@tanstack/react-query";

import type { ApiResponseMemberResponse } from "../model";
import request from "../request";
import { apiRoutes } from "../routes";

export const useGetMe = () =>
  useQuery<ApiResponseMemberResponse>({
    queryKey: [apiRoutes.membersMe],
    queryFn: () => request.get(apiRoutes.membersMe),
  });
