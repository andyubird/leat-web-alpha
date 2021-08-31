// 以下為Component範例。直接使用也可以。
import * as React from "react";
import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default function BasicSelect(props) {
  const [county, setCounty] = React.useState("嘉義縣");

  const handleChange = (e) => {
    if (props.callbackFromParent) {
      props.callbackFromParent(e.target.value);
    }
    setCounty(e.target.value);
  };

  return (
    <Box sx={{ minWidth: 240 }}>
      <FormControl>
        <InputLabel id="demo-simple-select-label">縣市</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="縣市"
          value={county}
          onChange={handleChange}
        >
          <MenuItem value="台北市">台北市</MenuItem>
          <MenuItem value="新北市">新北市</MenuItem>
          <MenuItem value="桃園市">桃園市</MenuItem>
          <MenuItem value="台中市">台中市</MenuItem>
          <MenuItem value="台南市">台南市</MenuItem>
          <MenuItem value="高雄市">高雄市</MenuItem>
          <MenuItem value="新竹縣">新竹縣</MenuItem>
          <MenuItem value="苗栗縣">苗栗縣</MenuItem>
          <MenuItem value="彰化縣">彰化縣</MenuItem>
          <MenuItem value="南投縣">南投縣</MenuItem>
          <MenuItem value="雲林縣">雲林縣</MenuItem>
          <MenuItem value="嘉義縣">嘉義縣</MenuItem>
          <MenuItem value="屏東縣">屏東縣</MenuItem>
          <MenuItem value="宜蘭縣">宜蘭縣</MenuItem>
          <MenuItem value="花蓮縣">花蓮縣</MenuItem>
          <MenuItem value="台東縣">台東縣</MenuItem>
          <MenuItem value="澎湖縣">澎湖縣</MenuItem>
          <MenuItem value="金門縣">金門縣</MenuItem>
          <MenuItem value="連江縣">連江縣</MenuItem>
          <MenuItem value="基隆市">基隆市</MenuItem>
          <MenuItem value="新竹市">新竹市</MenuItem>
          <MenuItem value="嘉義市">嘉義市</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
