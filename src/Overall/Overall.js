import React, { useState } from "react";
import CitySelector from "../utils/CitySelector";
import YearSelector from "../utils/YearSelector";
//import SectorSelector from "../utils/SectorSelector";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Datagrid from "./components/Datagrid";
import SectorBarChart from "./components/SectorBarChart";
import MonthlyBarChart from "./components/MonthlyBarChart";
import { useFetchData, useFilter } from "../utils/DataProcessor";
//import { Paper } from "@material-ui/core";

function log(txt) {
  console.log(txt);
}

export default function Overall() {
  const [state, setState] = useState({
    county: "嘉義縣",
    baseYear: 2021,
    compYear: 2020
  });

  let baseData = {
    key: "baseData",
    ...useFilter(useFetchData(), state.baseYear, 123, state.county)
  };
  let compData = {
    key: "compData",
    ...useFilter(useFetchData(), state.compYear, 123, state.county)
  };
  let diffData = {
    key: "diffData",
    name: "兩年度差異(度)",
    house: baseData.house - compData.house,
    service: baseData.service - compData.service,
    agri: baseData.agri - compData.agri,
    indus: baseData.indus - compData.indus,
    total: baseData.total - compData.total
  };
  let contributionData = {
    key: "contributionData",
    name: "成長貢獻度(%)",
    house: (diffData.house / diffData.total) * 100,
    service: (diffData.service / diffData.total) * 100,
    agri: (diffData.agri / diffData.total) * 100,
    indus: (diffData.indus / diffData.total) * 100,
    total: (diffData.total / diffData.total) * 100
  };
  let diffDataPercent = {
    key: "diffDataPercent",
    name: "節電率(%)",
    house: (diffData.house / baseData.house) * 100,
    service: (diffData.service / baseData.service) * 100,
    agri: (diffData.agri / baseData.agri) * 100,
    indus: (diffData.indus / baseData.indus) * 100,
    total: (diffData.total / baseData.total) * 100
  };

  function setCounty(county) {
    setState({ ...state, county: county });
  }

  function setBaseYear(year) {
    setState({ ...state, baseYear: year });
  }

  function setCompYear(year) {
    setState({ ...state, compYear: year });
  }

  return (
    <Container>
      <Box mt={3}>
        <Grid container spacing={3} justifyContent="space-around">
          {/*<h2>整體售電分析</h2>*/}
          <Grid item xs={12} sm>
            <CitySelector callbackFromParent={setCounty} value={state.county} />
          </Grid>
          <Grid item xs={6} sm>
            <YearSelector
              label="比較年"
              callbackFromParent={setCompYear}
              value={state.compYear}
            />
          </Grid>
          <Grid item xs={6} sm>
            <YearSelector
              label="基準年"
              callbackFromParent={setBaseYear}
              value={state.baseYear}
            />
          </Grid>
        </Grid>
      </Box>
      <Box mt={3}>
        {/*<h2>表格</h2>*/}
        <Datagrid
          data={[
            compData,
            baseData,
            diffData,
            contributionData,
            diffDataPercent
          ]}
        />
      </Box>
      <Box height={500}>
        {/*<<h2>部門長條圖</h2>*/}
        <SectorBarChart />
      </Box>
      <Box height={500}>
        {/*<h2>逐月長條圖</h2>*/}
        <MonthlyBarChart />
      </Box>
    </Container>
  );
}
