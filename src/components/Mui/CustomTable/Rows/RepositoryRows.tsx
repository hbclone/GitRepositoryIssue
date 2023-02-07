import styled from "@emotion/styled";
import { TableRow } from "@mui/material";
import React, { useState } from "react";
import { Repository } from "../../../../api/interface/git";
import { Colors, typography } from "../../../../style/theme";
import FilledButton from "../../FilledButton";
import CenteredCell from "../CenterCell";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import GradeIcon from "@mui/icons-material/Grade";
import {
  deleteStarRepository,
  getStarRepository,
  onClickHtml,
} from "../../../../util/util";

const RepositoryTableRow = (
  props: Repository & {
    addFavorites: () => void;
    favorites: boolean;
  }
) => {
  const [star, setStar] = useState(props.favorites);

  const favoriteEvent = () => {
    props.addFavorites();
    setStar(getStarRepository(props.id));
  };

  const deleteFavoriteEvent = () => {
    deleteStarRepository(props.id);
    setStar(getStarRepository(props.id));
  };

  return (
    <TableRow
      hover
      style={{
        ...typography.Body_md2,
      }}
    >
      <CenteredCell>
        {star ? (
          <GradeIcon
            onClick={deleteFavoriteEvent}
            style={{ cursor: "pointer", color: Colors.basic[300] }}
          />
        ) : (
          <StarBorderIcon
            onClick={favoriteEvent}
            style={{ cursor: "pointer", color: Colors.basic[300] }}
            color={"action"}
          />
        )}
      </CenteredCell>
      <CenteredCell>{props.id}</CenteredCell>
      <CenteredCell>{props.name}</CenteredCell>
      <CenteredCell>{props.full_name}</CenteredCell>
      <CenteredCell>{props.owner.login}</CenteredCell>
      <CenteredCell>
        <FilledButton
          title="이동"
          textStyle={typography.Body_md5}
          onClick={() => onClickHtml(props.html_url)}
          sx={{ marginRight: "1rem", height: "2rem" }}
          bg={Colors.dark[200]}
        />

        <FilledButton
          title="즐겨찾기"
          textStyle={typography.Body_md5}
          onClick={favoriteEvent}
          sx={{ height: "2rem" }}
        />
      </CenteredCell>
    </TableRow>
  );
};

export default React.memo(RepositoryTableRow);

const Hyperlink = styled.span`
  text-decoration: underline;
  text-decoration-color: blue;
  text-underline-offset: 0.5rem;
  text-decoration-thickness: 0.2rem;
  cursor: pointer;
  color: blue;
`;
