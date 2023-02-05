import { useMemo } from "react";
import { Repository } from "./interface/git";
import { ApiOctokit } from "./Octokit";

interface RepositoryParams {
  q: string; // repository 명
  page: number; // 검색 페이지
  per_page: number; // 1페이지 갯수
}

//레포지토리 조회
export const GetRepositoryList = async (params: RepositoryParams) => {
  const octokit = ApiOctokit;
  let url = `/search/repositories?`;

  const length = params ? Object.keys(params).length : 0;
  Object.entries(params).forEach(([key, value], index) => {
    if (key) {
      if (index === 0) {
        url += `${key}=${encodeURIComponent(`${value} in:name`)}`;
      } else {
        url += `${key}=${value}`;
      }

      if (index < length - 1) {
        url += "&";
      }
    }
  });

  const { data } = await octokit.request(`GET ${url}`);
  return {
    repository: data.items as Repository[],
  };
};
