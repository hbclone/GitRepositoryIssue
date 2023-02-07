import styled from "@emotion/styled";
import React, { useCallback, useEffect, useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Repository } from "../api/interface/git";
import { H2_Regular } from "../components/Mui/Typography";
import MyPageList from "../components/MyPageList";
import PageHeader from "../components/PageHeader";
import { Colors } from "../style/theme";
import {
  deleteStarRepository,
  getStorageIssueCount,
  getStorageItem,
} from "../util/util";

const MyPage = () => {
  const [favoriteList, setFavoriteList] = useState<Repository[]>([]);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setFavoriteList(getStorageItem());
  }, [localStorage]);

  const onDeleteItem = useCallback(
    (id: number) => () => {
      deleteStarRepository(id);
      const DeleteItem = favoriteList.filter((e) => e.id !== id);
      setFavoriteList(DeleteItem);
    },
    [favoriteList]
  );

  const onNavigateIsuue = (repo: number) => () => {
    searchParams.set("repo", String(repo));
    setSearchParams(searchParams);
    navigate({
      pathname: "/issue",
      search: `${createSearchParams(searchParams)}`,
    });
  };

  return (
    <>
      <PageHeader pageTitle="MyPage" />

      <Wrapper>
        <H2_Regular color={Colors.gray[100]}>My Repository</H2_Regular>
        {favoriteList.map((e) => (
          <MyPageList
            key={e.id}
            {...e}
            onDelete={onDeleteItem(e.id)}
            onNavigate={onNavigateIsuue(e.id)}
          />
        ))}
      </Wrapper>
    </>
  );
};

export default MyPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  gap: 1rem;
  padding: 0 1rem;
  margin-top: 1rem;
`;
