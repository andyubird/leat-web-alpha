import CitySelector from "../util/CitySelector";
import Box from "@material-ui/core/Box";

function log(txt) {
  console.log(txt);
}

export default function Overall() {
  return (
    <Box m={2}>
      {/*<h2>整體售電分析</h2>*/}
      <CitySelector callbackFromParent={log} />
    </Box>
  );
}
