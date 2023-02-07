import styled from "@emotion/styled";
import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { getAllRepositoryIssues } from "../api/GitApi";
import { Issues } from "../api/interface/git";
import { Colors } from "../style/theme";
import { getStorageIssueCount } from "../util/util";
import { ISSUE_TABLE_COLUMNS } from "./Mui/CustomTable/Columns/IssueColumns";
import CustomTable from "./Mui/CustomTable/CustomTable";
import IssueRows from "./Mui/CustomTable/Rows/IssueRows";
import TableRowLoader from "./Mui/CustomTable/TableLoader";
import { H2_Regular } from "./Mui/Typography";

const IssueTable = () => {
  const [issueList, setIssueList] = useState<Issues[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const totalPage = useMemo(
    () =>
      Math.ceil(getStorageIssueCount() / 20) > 50
        ? 50
        : Math.ceil(getStorageIssueCount() / 20),
    [localStorage]
  );
  useEffect(() => {
    getItem();
  }, [location]);

  const getItem = async () => {
    const { issueItem, loading } = await getAllRepositoryIssues({
      page: Number(searchParams.get("page")) || 1,
      repo:
        searchParams.get("repo") !== "ALL"
          ? Number(searchParams.get("repo"))
          : null,
    });

    if (searchParams.get("repo")) {
      const filterItem = issueItem.filter(
        (e) => e.repository_id === Number(searchParams.get("repo"))
      );

      setIssueList(filterItem);
    } else {
      setIssueList(issueItem);
    }

    setLoading(loading);
  };

  return (
    <>
      <CustomTable columns={ISSUE_TABLE_COLUMNS} totalPage={totalPage}>
        {loading
          ? [...Array(20)].map((_, index) => (
              <TableRowLoader key={index} length={ISSUE_TABLE_COLUMNS.length} />
            ))
          : issueList!.map((repo) => <IssueRows key={repo.id} {...repo} />)}
      </CustomTable>
    </>
  );
};

export default IssueTable;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  margin: 1rem 0rem;
`;
