import styled from "@emotion/styled";
import { TableRow } from "@mui/material";
import React, { useState } from "react";
import { Issues, Repository } from "../../../../api/interface/git";
import { Colors, rowCenter, typography } from "../../../../style/theme";
import FilledButton from "../../FilledButton";
import CenteredCell from "../CenterCell";
import { getFormatDate } from "../../../../api/GitApi";
import { onClickHtml } from "../../../../util/util";

const IssueTableRow = (props: Issues) => {
  const createAt = new Date(props.created_at);

  return (
    <TableRow
      hover
      style={{
        ...typography.Body_md2,
      }}
    >
      <CenteredCell>{getFormatDate(createAt)}</CenteredCell>
      <CenteredCell style={{ width: "20rem" }}>
        <ElipseTitle onClick={() => onClickHtml(props.html_url)}>
          {props.title}
        </ElipseTitle>
      </CenteredCell>
      <CenteredCell>{props.repository}</CenteredCell>
      <CenteredCell>{props.state}</CenteredCell>
      <CenteredCell>{props.user.login}</CenteredCell>
      <CenteredCell>{props.comments}</CenteredCell>

      <CenteredCell>
        <FilledButton
          title="이슈보기"
          textStyle={typography.Body_md5}
          onClick={() => onClickHtml(props.html_url)}
          sx={{ height: "2rem" }}
        />
      </CenteredCell>
    </TableRow>
  );
};

export default React.memo(IssueTableRow);

const Hyperlink = styled.span``;

const ElipseTitle = styled.div`
  width: 20rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-decoration: underline;
  text-decoration-color: blue;
  text-underline-offset: 0.5rem;
  text-decoration-thickness: 0.2rem;
  cursor: pointer;
  color: #a55858;
`;
