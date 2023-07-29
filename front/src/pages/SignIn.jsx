import axios from "axios";
import { useSelector, connect } from "react-redux";
import {
  Avatar,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { MdLockOutline } from "react-icons/md";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { emailRegex, errorMessages, toastOptions } from "./SignUp";
import { loginUser } from "../redux/reducer/authSlice";

export const validateCredentials = (credentials) => {
  if (!credentials.email || !credentials.password) {
    return "requiredFields";
  } else if (!emailRegex.test(credentials.email)) {
    return "invalidEmail";
  } else if (credentials.password.length <= 5) {
    return "shortPassword";
  }
};

const SignIn = ({ loginUser }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();
  const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = {
        email: credentials.email,
        password: credentials.password,
      };
      const errorMessage = validateCredentials(credentials);

      if (errorMessage) {
        toast.error(errorMessages[errorMessage], toastOptions);
      } else {
        // Hacer la llamada a la API
        const response = await axios.post(
          "https://backvivavintage.azurewebsites.net/auth/login",
          user
        );
        console.log(response.data, "res");
        // Si la llamada fue exitosa, obtener el token JWT del objeto de respuesta
        const jwtToken = response.data.jwt;

        localStorage.setItem("Authorization", `Bearer ${jwtToken}`);
        loginUser(user);
        navigate("/");
      }
    } catch (error) {
      toast.error(errorMessages.invalidCredentials, toastOptions);
    }
  };

  const state = useSelector((state) => state);
  console.log("estado", state);
  return (
    <Container component="main" maxWidth="xs" className="pb-40">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1 }}>
          <MdLockOutline />
        </Avatar>
        <Typography component="h1" variant="h5">
          Iniciar sesión
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo electrónico"
            value={credentials.email}
            name="email"
            onChange={handleOnChange}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            value={credentials.password}
            name="password"
            onChange={handleOnChange}
            label="Contraseña"
            type={showPassword ? "text" : "password"}
            id="password"
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  onClick={handleClickShowPassword}
                  sx={{ cursor: "pointer" }}
                >
                  {showPassword ? <RiEyeFill /> : <RiEyeOffFill />}
                </InputAdornment>
              ),
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            //
            label="Recordarme"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Iniciar sesión
          </Button>
          <Grid container>
            <Grid item xs>
              <Typography variant="body2">
                <Link to="/forgotpassword" variant="body2">
                  ¿Olvidó su contraseña?
                </Link>
              </Typography>
            </Grid>
            <Typography variant="body2">
              <Link to="/register" variant="body2" style={{ marginLeft: 3 }}>
                ¿No tiene una cuenta? Cree una aquí
              </Link>
            </Typography>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default connect(null, { loginUser })(SignIn);
