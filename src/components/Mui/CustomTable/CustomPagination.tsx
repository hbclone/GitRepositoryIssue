import styled from "@emotion/styled";
import { Pagination } from "@mui/material";
import React, { ChangeEvent, useCallback } from "react";
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Colors, rowCenter } from "../../../style/theme";

export interface PaginationProps {
  totalPage?: number;
}

const CustomPagination = ({ totalPage }: PaginationProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page");

  const handlePageChange = useCallback(
    (_: ChangeEvent<unknown>, newPage: number) => {
      searchParams.set("page", String(newPage));
      setSearchParams(searchParams);
      navigate(
        {
          pathname: location.pathname,
          search: `${createSearchParams(searchParams)}`,
        },
        { replace: true }
      );
    },
    [location]
  );

  return (
    <StyledPagination
      count={totalPage || 1}
      page={page && page !== "undefined" ? parseInt(page as string, 10) : 1}
      onChange={handlePageChange}
    />
  );
};

export default CustomPagination;

const StyledPagination = styled(Pagination)`
  width: 100%;
  ${rowCenter};
  margin-top: 3rem;
  ul > li {
    .Mui-selected {
      background-color: ${Colors.basic[400]};
      color: ${Colors.basic[300]};

      &:hover {
        background-color: ${Colors.basic[400]};
        color: ${Colors.basic[300]};
      }
    }
    .MuiPaginationItem-page {
      font-size: 1.2rem;
      color: ${Colors.gray[200]};
    }
    .MuiPaginationItem-icon {
      width: 2rem;
      height: 2rem;
    }
  }
`;
