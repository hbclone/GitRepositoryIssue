import { TableCell, TableCellProps } from "@mui/material";
import { ReactNode } from "react";
import { Colors } from "../../../style/theme";

interface Props {
  children: ReactNode;
}

const CenteredCell = ({ children, ...props }: Props & TableCellProps) => {
  return (
    <TableCell
      align="center"
      sx={{ whiteSpace: "nowrap", color: Colors.gray[200] }}
      {...props}
    >
      {children}
    </TableCell>
  );
};

export default CenteredCell;
