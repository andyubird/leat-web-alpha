//import csvData from "../data/1_city_202107.csv";
//import { readString } from "react-papaparse";
import Numeral from "numeraljs";
import moment from "moment";
import dataObj from "../data/1_city.json";

//#region Process Data

// let headers = [
//   "日期",
//   "縣市",
//   "住宅部門售電量(度)",
//   "住宅部門用電佔比(%)",
//   "服務業部門(含包燈)(度)",
//   "服務業部門(含包燈)用電佔比(%)",
//   "農林漁牧售電量(度)",
//   "農林漁牧用電佔比(%)",
//   "工業部門售電量(度)",
//   "工業部門用電佔比(%)",
//   "合計售電量(度)",
//   "縣市用電佔比(%)"
// ];

// let data = readString(csvData, {
//   quotes: false, //or array of booleans
//   quoteChar: '"',
//   escapeChar: '"',
//   delimiter: "",
//   header: false,
//   newline: "",
//   skipEmptyLines: false, //or 'greedy',
//   columns: headers, //or array of strings
//   preview: null,
//   download: true,
//   dynamicTyping: true
// }).data;

// console.log(data);

// data.shift();
// data.pop();

// const dataObj = data.reduce((acc, e, idx) => {
//   acc.push(
//     headers.reduce((r, h, i) => {
//       r[h] = e[i];
//       return r;
//     }, {})
//   );
//   return acc;
// }, []);

Object.keys(dataObj).forEach(function (key) {
  dataObj[key]["日期"] = moment(
    dataObj[key]["日期"],
    "YYYY年MM月",
    "zh-tw",
    true
  ).format("YYYY-MM-DD");
});

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

//console.log(data);

export function useFetchData() {
  return dataObj;
}

export function useFilter(data, year, monthList, county) {
  let filteredResult = data.filter((entry) => {
    return (
      entry.縣市 === county &&
      moment(entry.日期).isSame(moment(year, "YYYY"), "year")
    );
  });

  return filteredResult.reduce(
    (sum, item) => {
      sum["house"] += Numeral(item["住宅部門售電量(度)"]);
      sum["service"] += Numeral(item["服務業部門(含包燈)(度)"]);
      sum["agri"] += Numeral(item["農林漁牧售電量(度)"]);
      sum["indus"] += Numeral(item["工業部門售電量(度)"]);
      sum["total"] += Numeral(item["合計售電量(度)"]);
      return sum;
    },
    {
      name: year + "年售電量(度)",
      house: 0,
      service: 0,
      agri: 0,
      indus: 0,
      total: 0
    }
  );
}

export function useFilterMonthly(data, year, monthList, county) {
  let filteredResult = data.filter((entry) => {
    return (
      entry.縣市 === county &&
      moment(entry.日期).isSame(moment(year, "YYYY"), "year")
    );
  });

  let formattedResult = filteredResult.map((obj) => {
    let element = {};
    element[obj.key] = obj.value;

    element["月"] = moment(obj["日期"], "YYYY年MM月").format("M").toString();
    element["住宅部門售電量(度)"] = obj["住宅部門售電量(度)"] / 10000000;
    element["服務業部門(含包燈)(度)"] =
      obj["服務業部門(含包燈)(度)"] / 10000000;
    element["農林漁牧售電量(度)"] = obj["農林漁牧售電量(度)"] / 10000000;
    element["工業部門售電量(度)"] = obj["工業部門售電量(度)"] / 10000000;

    return element;
  });

  return formattedResult.reverse();
}
