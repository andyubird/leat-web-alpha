import * as React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const yearList = [2016, 2017, 2018, 2019, 2020, 2021];

export default function BasicSelect(props) {
  const [year, setYear] = React.useState("");

  const handleChange = (e) => {
    if (props.callbackFromParent) {
      props.callbackFromParent(e.target.value);
    }
    setYear(e.target.value);
  };

  //const yearList = 0;

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label={props.label}
        value={year}
        onChange={handleChange}
      >
        {yearList.map((year) => (
          <MenuItem key={year} value={year}>
            {year}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
