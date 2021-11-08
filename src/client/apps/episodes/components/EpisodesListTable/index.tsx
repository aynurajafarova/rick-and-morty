import { FC } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { IEpisodeItem } from "../../models";

interface IProps {
  episodes?: IEpisodeItem[];
}

interface ITableHeader {
  key: number;
  name: string;
}

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#1b1b1b",
    color: "#dddddd",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const tableHeader: ITableHeader[] = [
  { key: 1, name: "Id" },
  { key: 2, name: "Name" },
  { key: 3, name: "Episode" },
  { key: 4, name: "Air Date" },
];

const EpisodesListTable: FC<IProps> = ({ episodes }) => {
  return (
    <>
      {episodes && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                {tableHeader?.map(({ name, key }: ITableHeader) => {
                  return <StyledTableCell key={key}>{name}</StyledTableCell>;
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {episodes?.map(
                ({ id, name, episode, air_date }: IEpisodeItem) => (
                  <StyledTableRow key={id}>
                    <StyledTableCell component="th" scope="row">
                      {id}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {name}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {episode}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {air_date}
                    </StyledTableCell>
                  </StyledTableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default EpisodesListTable;
