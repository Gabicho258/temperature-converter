import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";

function App() {
  const [type, setType] = useState("");

  const handleChange = ({ target }) => {
    setType(target.value);
  };
  const [temperature, setTemperature] = useState("");
  const handleInput = ({ target }) => {
    setTemperature(target.value);
  };
  const [celcius, setCelcius] = useState("-");
  const [farenheit, setFarenheit] = useState("-");
  const makeConvert = () => {
    console.log(temperature);
    console.log(type);
    switch (type) {
      case "celcius":
        setFarenheit(temperature);
        setCelcius(convertToCelcius(temperature).toFixed(2));
        break;
      case "farenheit":
        setCelcius(temperature);
        setFarenheit(convertToFarenheit(temperature).toFixed(2));
        break;

      default:
        break;
    }
  };
  const convertToCelcius = (temperature) => {
    return (5 * (temperature - 32)) / 9;
  };
  const convertToFarenheit = (temperature) => {
    return (9 * temperature) / 5 + 32;
  };
  useEffect(() => {
    makeConvert();
  }, [temperature, type]);
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          sx={{
            height: "100vh",
            marginTop: "30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h3">Temperature converter</Typography>
          <TextField
            style={{ margin: "30px 0 30px" }}
            id="outlined-basic"
            label="Temperature"
            variant="outlined"
            type="number"
            // ref={temperatureRef}
            onChange={handleInput}
            value={temperature}
          />
          <TextField
            id="outlined-select-currency"
            select
            label="Type"
            value={type}
            // ref={typeRef}
            onChange={handleChange}
            helperText="Please select the type to convert"
          >
            <MenuItem key="celcius" value="celcius">
              Celius
            </MenuItem>
            <MenuItem key="farenheit" value="farenheit">
              Farenheit
            </MenuItem>
          </TextField>
          <Box
            sx={{
              margin: "15px 0 ",
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Typography variant="h6">Temperature in Celsius</Typography>
              <Typography variant="h6">{celcius}</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Typography variant="h6">Temperature in Farenheit</Typography>
              <Typography variant="h6">{farenheit} </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default App;
