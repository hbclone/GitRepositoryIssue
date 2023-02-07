import { TableCell, TableHead, TableRow } from "@mui/material";
import { Colors } from "../../../style/theme";
import { Subtitle3, Subtitle4 } from "../Typography";

export interface TableColumnProps {
  label: string;
}

export interface CustomTableHeadProps {
  columns: string[]; // 테이블 헤더 열 제목 배열
}

const CustomTableHead = ({ columns }: CustomTableHeadProps) => {
  return (
    <TableHead>
      <TableRow
        style={{
          whiteSpace: "nowrap",
          fontSize: "1.5rem !important",
        }}
      >
        {columns?.map((label) => (
          <TableCell key={label} align="center">
            <Subtitle4 color={Colors.gray[200]}>{label}</Subtitle4>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default CustomTableHead;
