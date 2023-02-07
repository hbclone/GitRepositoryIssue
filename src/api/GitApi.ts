import { getStorageItem } from "../util/util";
import { Issues, Repository } from "./interface/git";
import { ApiOctokit } from "./Octokit";

export interface RepositoryParams {
  q: string; // repository 명
  page?: number; // 검색 페이지
  per_page?: number; // 1페이지 갯수
}

export interface IssueParams {
  page: number; // 검색 페이지
}

//레포지토리 조회
export const GetRepositoryList = async (params: RepositoryParams) => {
  const octokit = ApiOctokit;
  let url = `/search/repositories?`;

  let loading = true;
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
  loading = false;
  return {
    repository: data.items as Repository[],
    totalCount: data.total_count,
    loading,
  };
};
const getRepositoryIssue = async ({
  owner,
  name,
  page,
  repoId,
}: {
  owner: string;
  name: string;
  page: number;
  repoId: number;
}) => {
  const octokit = ApiOctokit;

  const { data } = await octokit.request(
    `GET /repos/${owner}/${name}/issues?page=${page}&per_page=${15}`
  );

  const item = data.map((e: any) => {
    return { ...e, repository: name, repository_id: repoId };
  });

  return item as Issues[];
};

//이슈 총 조회
export const getAllRepositoryIssues = async ({
  page,
  repo,
}: IssueParams & { repo: number | null }) => {
  let localItem = getStorageItem();
  let loading = true;
  const issueItem: Issues[] = [];

  if (repo) {
    localItem = localItem.filter((e) => e.id == repo);
  }

  const item = (await Promise.all(
    localItem.map((e) =>
      getRepositoryIssue({
        owner: e.owner.login,
        name: e.name,
        page: page,
        repoId: e.id,
      })
    )
  )
    .then((res) => res.map((e: any) => e as Issues))
    .catch((e) => console.log(e))) as [];

  item.forEach((e: any) => {
    issueItem.push(...e);
  });

  loading = false;

  return {
    issueItem,
    loading,
  };
};

//날짜 변환 라이브러리
export function getFormatDate(date: Date) {
  let year = date.getFullYear();
  let month = String(1 + date.getMonth());
  month = Number(month) >= 10 ? month : "0" + month;
  let day = String(date.getDate());
  day = Number(day) >= 10 ? day : "0" + day;
  return year + "-" + month + "-" + day;
}
