import {Radio, RadioGroup, FormControlLabel, FormControl, FormLabel} from "@mui/material";

const RadioBtn = ({gender, onChange}) => (
    <FormControl >
      <FormLabel id="demo-row-radio-buttons-group-label">Genero</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={gender}
        name="row-radio-buttons-group"
        onChange={onChange}
        style={{ flexDirection: "row" }}
      >
        <FormControlLabel value="woman" control={<Radio />} label="Mujer" />
        <FormControlLabel value="man" control={<Radio />} label="Hombre" />
        <FormControlLabel value="all" control={<Radio />} label="Todos" />
      </RadioGroup>
    </FormControl>
  );

  export default RadioBtn;
