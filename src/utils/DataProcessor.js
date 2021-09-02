import csvData from "../data/1_city_202106.csv";
import { readString } from "react-papaparse";
import Numeral from "numeraljs";
import moment from "moment";

//#region Process Data

let headers = [
  "日期",
  "縣市",
  "住宅部門售電量(度)",
  "住宅部門用電佔比(%)",
  "服務業部門(含包燈)(度)",
  "服務業部門(含包燈)用電佔比(%)",
  "農林漁牧售電量(度)",
  "農林漁牧用電佔比(%)",
  "工業部門售電量(度)",
  "工業部門用電佔比(%)",
  "合計售電量(度)",
  "縣市用電佔比(%)"
];

let data = readString(csvData, {
  quotes: false, //or array of booleans
  quoteChar: '"',
  escapeChar: '"',
  delimiter: "",
  header: false,
  newline: "",
  skipEmptyLines: false, //or 'greedy',
  columns: headers, //or array of strings
  preview: null
}).data;

data.shift();
data.pop();

const dataObj = data.reduce((acc, e, idx) => {
  acc.push(
    headers.reduce((r, h, i) => {
      r[h] = e[i];
      return r;
    }, {})
  );
  return acc;
}, []);

// function rowsToObjects(headers, rows) {
//   return rows.reduce((acc, e, idx) => {
//     acc.push(
//       headers.reduce((r, h, i) => {
//         r[h] = e[i];
//         return r;
//       }, {})
//     );
//     return acc;
//   }, []);
// }

//#endregion Process Data

console.log(data);

export function useProcessCityCSV() {
  return dataObj;
}
