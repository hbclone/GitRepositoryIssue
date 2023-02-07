import { Skeleton, TableCell, TableRow } from "@mui/material";
import { typography } from "../../../style/theme";

const TableRowLoader = ({ length }: { length: number }) => {
  return (
    <TableRow
      hover
      style={{
        ...typography.Body_md2,
        height: "2rem",
      }}
    >
      {[...Array(length)].map((_, index) => (
        <TableCell align="center" key={index}>
          <Skeleton variant="text" />
        </TableCell>
      ))}
    </TableRow>
  );
};

export default TableRowLoader;
