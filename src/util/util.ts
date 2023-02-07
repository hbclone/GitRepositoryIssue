import QueryString from "qs";
import { createSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Repository } from "../api/interface/git";
import { DropList } from "../components/Mui/MuiSelect";

//localstorage  아이템 리턴
export const getStorageItem = () => {
  const localItem = localStorage.getItem("favorites");

  if (localItem) {
    const originalItem = JSON.parse(localItem);
    return originalItem as Repository[];
  }

  return [];
};

//localstorage isuueCount return
export const getStorageIssueCount = () => {
  const localItem = localStorage.getItem("favorites");
  if (localItem) {
    const originalItem = JSON.parse(localItem);

    const count = originalItem.map((e: Repository) => e.open_issues_count);

    return count.reduce((acc: any, cur: any) => acc + cur);
  }
  return 0;
};

//loaclstorage에 등록 여부 체크 후 없으면 등록 있으면 에러
export const setFavorites = (item: Repository) => {
  const saveItem: Repository[] = [
    {
      id: item.id,
      full_name: item.full_name,
      html_url: item.html_url,
      name: item.name,
      open_issues_count: item.open_issues_count,
      forks: item.forks,
      stargazers_count: item.stargazers_count,
      language: item.language,
      owner: {
        login: item.owner.login,
      },
    },
  ];
  const localItem = localStorage.getItem("favorites");

  if (localItem) {
    const originalItem = JSON.parse(localItem);

    if (originalItem.length >= 4) {
      return toast.error("4개이상 레포지토리를 저장할 수 없습니다.");
    }

    if (Object.values(originalItem).find((e: any) => e.id === item.id))
      return toast.error("이미 저장된 레포지토리입니다.");
    else {
      saveItem.push(...originalItem);
      localStorage.setItem("favorites", JSON.stringify(saveItem));
    }
  } else {
    localStorage.setItem("favorites", JSON.stringify(saveItem));
  }

  return toast.success("즐겨찾기에 추가되었습니다.");
};

//아이디로 즐겨찾기 여부 boolean값 리턴
export const getStarRepository = (id: number) => {
  const localItem = localStorage.getItem("favorites");

  if (localItem) {
    const originalItem = JSON.parse(localItem);

    if (Object.values(originalItem).find((e: any) => e.id === id)) {
      return true;
    }
  }

  return false;
};

//츨겨찾기에 등록된 레포지토리 삭제
export const deleteStarRepository = (id: number) => {
  const localItem = localStorage.getItem("favorites");

  if (localItem) {
    const originalItem = JSON.parse(localItem);

    const deleteItem = Object.values(originalItem).filter(
      (e: any) => e.id !== id
    );
    localStorage.setItem("favorites", JSON.stringify(deleteItem));

    return toast.success("즐겨찾기에서 삭제 되었습니다.");
  }
};

//링크 이동
export const onClickHtml = (url: string) => {
  window.open(url, "_blank", "noopener, noreferrer");
};

//즐겨찾기한 Repository name
export const repositoryOption = () => {
  const localItem = localStorage.getItem("favorites");
  if (localItem) {
    const originalItem = JSON.parse(localItem);

    const item: DropList = [
      { value: "ALL", label: "전체" },
      ...originalItem.map((e: Repository) => {
        return {
          value: e.id,
          label: e.name,
        };
      }),
    ];

    return item;
  }

  return [{ value: "ALL", label: "전체" }] as DropList;
};
