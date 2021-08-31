import CitySelector from "../util/CitySelector";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

function log(txt) {
  console.log(txt);
}

export default function Overall() {
  return (
    <Grid container mt={3}>
      {/*<h2>整體售電分析</h2>*/}
      <Grid item xs>
        <CitySelector callbackFromParent={log} />
      </Grid>
      <Grid item xs>
        <CitySelector callbackFromParent={log} />
      </Grid>
      <Grid item xs>
        <CitySelector callbackFromParent={log} />
      </Grid>
    </Grid>
  );
}
