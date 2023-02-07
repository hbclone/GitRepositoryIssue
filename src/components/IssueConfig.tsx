import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Colors, rowCenter } from "../style/theme";
import { repositoryOption } from "../util/util";
import { DropList, MuiSelect } from "./Mui/MuiSelect";

const IssueConfig = () => {
  const [repositorySelect, setrepositorySelect] = useState<"ALL" | number>(
    "ALL"
  );

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      searchParams.get("repo") !== null &&
      searchParams.get("repo") !== "ALL"
    ) {
      setrepositorySelect(Number(searchParams.get("repo")));
    }
  }, [location]);

  const onFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "ALL") {
      searchParams.delete("repo");
      setSearchParams(searchParams);
      setrepositorySelect(e.target.value as unknown as number);
    } else {
      searchParams.set("repo", e.target.value as string);
      setSearchParams(searchParams);
      setrepositorySelect(e.target.value as unknown as number);

      navigate({
        pathname: location.pathname,
        search: `${createSearchParams(searchParams)}`,
      });
    }
  };

  return (
    <ConfigWrapper>
      <SelectWrapper>
        <MuiSelect
          dropList={repositoryOption()}
          label="Repo"
          sx={{ width: "100%" }}
          InputProps={{
            style: {
              color: Colors.gray[300],
              height: "1.5rem",
              width: "100%",
            },
          }}
          wrapperProps={{
            width: "20rem",
          }}
          value={repositorySelect}
          onChange={onFilter}
        />
      </SelectWrapper>
    </ConfigWrapper>
  );
};

export default IssueConfig;

const ConfigWrapper = styled.div`
  padding: 1rem 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const SelectWrapper = styled.div`
  display: flex;
  padding: 0 1rem;
`;
