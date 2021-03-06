import React from "react";
import { makeStyles } from "@material-ui/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
//import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];

//console.log(rows);

export default function BasicTable(props) {
  const classes = useStyles();

  return (
    <TableContainer component={"div"}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>項目</TableCell>
            <TableCell align="right">住宅</TableCell>
            <TableCell align="right">服務業</TableCell>
            <TableCell align="right">農林漁牧業</TableCell>
            <TableCell align="right">工業</TableCell>
            <TableCell align="right">合計</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row) => (
            <TableRow key={row.key}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">
                {row.house.toLocaleString("en-US")}
              </TableCell>
              <TableCell align="right">
                {row.service.toLocaleString("en-US")}
              </TableCell>
              <TableCell align="right">
                {row.agri.toLocaleString("en-US")}
              </TableCell>
              <TableCell align="right">
                {row.indus.toLocaleString("en-US")}
              </TableCell>
              <TableCell align="right">
                {row.total.toLocaleString("en-US")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
