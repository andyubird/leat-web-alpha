import CitySelector from "../utils/CitySelector";
import YearSelector from "../utils/YearSelector";
import SectorSelector from "../utils/SectorSelector";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Datagrid from "./components/Datagrid";
import SectorBarChart from "./components/SectorBarChart";
import MonthlyBarChart from "./components/MonthlyBarChart";

function log(txt) {
  console.log(txt);
}

export default function Overall() {
  return (
    <Container>
      <Box mt={3}>
        <Grid container spacing={3} justifyContent="space-around">
          {/*<h2>整體售電分析</h2>*/}
          <Grid item xs={12} sm>
            <CitySelector callbackFromParent={log} />
          </Grid>
          <Grid item xs={6} sm>
            <YearSelector label="基準年" callbackFromParent={log} />
          </Grid>
          <Grid item xs={6} sm>
            <YearSelector label="比較年" callbackFromParent={log} />
          </Grid>
        </Grid>
      </Box>
      <Box mt={3}>
        {/*<h2>表格</h2>*/}
        <Datagrid />
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
