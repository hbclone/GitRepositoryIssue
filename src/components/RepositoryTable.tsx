import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { GetRepositoryList } from "../api/GitApi";
import { Repository } from "../api/interface/git";
import { REPOSITORY_TABLE_COLUMNS } from "./Mui/CustomTable/Columns/RepositoryColumns";
import CustomTable from "./Mui/CustomTable/CustomTable";
import RepositoryTableRow from "./Mui/CustomTable/Rows/RepositoryRows";
import TableRowLoader from "./Mui/CustomTable/TableLoader";
import Nothing from "./Nothing";
import { getStarRepository, setFavorites } from "../util/util";

const RepositoryTable = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [repositoryList, setRepositoryList] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    getItem();
  }, [location]);

  const getItem = useCallback(async () => {
    if (searchParams.get("q")) {
      const { repository, totalCount, loading } = await GetRepositoryList({
        q: searchParams.get("q") || "",
        page: Number(searchParams.get("page")) || 1,
        per_page: 20,
      });
      setRepositoryList(repository);
      setTotalPage(
        Math.ceil(totalCount / 20) > 50 ? 50 : Math.ceil(totalCount / 20)
      );
    }
    setLoading(loading);
  }, [location]);

  const addFavoriteItem = (item: Repository) => () => {
    setFavorites(item);
  };

  return !loading && repositoryList.length === 0 ? (
    <Nothing />
  ) : (
    <CustomTable columns={REPOSITORY_TABLE_COLUMNS} totalPage={totalPage}>
      {loading
        ? [...Array(20)].map((_, index) => (
            <TableRowLoader
              key={index}
              length={REPOSITORY_TABLE_COLUMNS.length}
            />
          ))
        : repositoryList!.map((repo) => (
            <RepositoryTableRow
              key={repo.id}
              {...repo}
              addFavorites={addFavoriteItem(repo)}
              favorites={getStarRepository(repo.id)}
            />
          ))}
    </CustomTable>
  );
};

export default RepositoryTable;
