import * as React from "react";
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
  episodes: IEpisodeItem[];
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
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

const rows = [
  { name: "Frozen yoghurt" },
  { name: "Frozen yoghurt" },
  { name: "Frozen yoghurt" },
  { name: "Frozen yoghurt" },
  { name: "Frozen yoghurt" },
];

const tableHeader = [
  { key: 1, name: "Id" },
  { key: 2, name: "Name" },
  { key: 3, name: "Episode" },
  { key: 4, name: "Air Date" },
];

const EpisodesListTable: React.FC<IProps> = ({ episodes }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {tableHeader?.map(({ name, key }: any) => {
              return <StyledTableCell key={key}>{name}</StyledTableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {episodes?.map(({ id, name, episode, air_date }: IEpisodeItem) => (
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
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default EpisodesListTable;
