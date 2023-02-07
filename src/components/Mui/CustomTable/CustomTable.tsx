import styled from "@emotion/styled";
import { Table, TableBody, TableContainer } from "@mui/material";
import React, {
  CSSProperties,
  MouseEvent,
  ReactNode,
  useCallback,
} from "react";
import { Colors, hideScroll } from "../../../style/theme";
import CustomPagination, { PaginationProps } from "./CustomPagination";
import CustomTableHead, { CustomTableHeadProps } from "./CustomTableHeader";

interface CustomTableProps {
  children: ReactNode;
  noPagination?: boolean;
  style?: CSSProperties;
}

function CustomTable({
  columns,
  totalPage,
  children,
  noPagination = false,
  style,
}: CustomTableProps & CustomTableHeadProps & PaginationProps) {
  return (
    <>
      <Container style={style}>
        <Table size="small">
          <CustomTableHead columns={columns} />
          <TableBody>{children}</TableBody>
        </Table>
        {noPagination ? null : <CustomPagination totalPage={totalPage} />}
      </Container>
    </>
  );
}

export default CustomTable;

const Container = styled(TableContainer)`
  flex: 1;
  height: 100vh;
  overflow-x: scroll;
  position: relative;
  background-color: ${Colors.dark[100]};
  ${hideScroll};
`;
