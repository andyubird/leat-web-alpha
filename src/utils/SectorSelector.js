// 以下為Component範例。直接使用也可以。
import * as React from "react";
//import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const cities = [
  "台北市",
  "新北市",
  "桃園市",
  "台中市",
  "台南市",
  "高雄市",
  "新竹縣",
  "苗栗縣",
  "彰化縣",
  "南投縣",
  "雲林縣",
  "嘉義縣",
  "屏東縣",
  "宜蘭縣",
  "花蓮縣",
  "台東縣",
  "澎湖縣",
  "金門縣",
  "連江縣",
  "基隆市",
  "新竹市",
  "嘉義市"
];

export default function BasicSelect(props) {
  const [county, setCounty] = React.useState("嘉義縣");

  const handleChange = (e) => {
    if (props.callbackFromParent) {
      props.callbackFromParent(e.target.value);
    }
    setCounty(e.target.value);
  };

  return (
    <FormControl>
      <InputLabel id="demo-simple-select-label">縣市</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="部門"
        value={county}
        onChange={handleChange}
      >
        {cities.map((city) => (
          <MenuItem key={city} value={city}>
            {city}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
