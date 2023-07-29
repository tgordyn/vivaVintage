import { Box, Select, InputLabel, MenuItem, FormControl } from "@mui/material";

const FilterSelect = ({handleChange, order}) => {
  
  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Ordenar por</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={order}
          label="Ordenar por"
          onChange={handleChange}
        >
          <MenuItem value={"Menor Precio"}>Menor Precio</MenuItem>
          <MenuItem value={"Mayor Precio"}>Mayor Precio</MenuItem>
          <MenuItem value={"Mejor Ranking"}>Mejor Ranking</MenuItem>
          <MenuItem value={"Menor Ranking"}>Menor Ranking</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterSelect;
