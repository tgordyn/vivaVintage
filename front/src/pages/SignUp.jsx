import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import {
  Avatar,
  TextField,
  Button,
  Typography,
  Checkbox,
  Grid,
  InputAdornment,
  FormControlLabel,
} from "@mui/material";
import { Box, Container } from "@mui/system";

// eslint-disable-next-line react-refresh/only-export-components
export const errorMessages = {
  requiredFields: "Todos los campos son obligatorios",
  shortUserName: "Introduzca un Nombre de Usuario con más de 5 caracteres",
  shortFirstName: "Introduzca un Nombre con más de 5 caracteres",
  shortLastName: "Introduzca un apellido de más de 5 caracteres",
  invalidEmail: "Introduzca una dirección de correo electrónico válida",
  shortPassword:
    "Introduzca una contraseña de más de 5 caracteres con una letra mayúscula y un número",
  invalidCredentials: "Credenciales inválidas",
};

// eslint-disable-next-line react-refresh/only-export-components
export const toastOptions = {
  autoClose: 1200,
  theme: "colored",
};

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const hasWeakPassword = (pass) => {
  // Longitud menor a 5, sin letra mayúscula o sin número
  return pass.length < 5 || !/[A-Z]/.test(pass) || !/\d/.test(pass);
};

// eslint-disable-next-line react-refresh/only-export-components
export const validateCredentials = (credentials) => {
  if (
    !credentials.email ||
    !credentials.username ||
    !credentials.firstName ||
    !credentials.lastName ||
    !credentials.password
  ) {
    return "requiredFields";
  } else if (credentials.username.length <= 5) {
    return "shortUserName";
  } else if (credentials.firstName.length <= 5) {
    return "shortFirstName";
  } else if (credentials.lastName.length <= 5) {
    return "shortLastName";
  } else if (!emailRegex.test(credentials.email)) {
    return "invalidEmail";
  } else if (hasWeakPassword(credentials.password)) {
    return "shortPassword";
  }
};

function SignUp() {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const registerUser = async () => {
    try {
      const response = await axios.post(
        "https://backvivavintage.azurewebsites.net/auth/register",
        {
          username: credentials.username,
          email: credentials.email,
          password: credentials.password,
          firstName: credentials.firstName,
          lastName: credentials.lastName,
        }
      );
      console.log("Usuario registrado exitosamente:", response);
      toast.success("Usuario registrado exitosamente", toastOptions);
      setCredentials({
        username: "",
        email: "",
        password: "",
        firstName: "",
        lastName: "",
      });
      navigate("/");
      // Realizar acciones adicionales después de registrar al usuario
    } catch (error) {
      console.error("Error al crear usuario:", error);
      toast.error("Error al crear usuario", toastOptions);
      // Manejar el error de registro de usuario
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log("user", credentials);
    e.preventDefault();

    const errorMessage = validateCredentials(credentials);

    if (errorMessage) {
      toast.error(errorMessages[errorMessage], toastOptions);
    } else {
      registerUser();
      console.log("credentials", credentials);
    }
  };

  return (
    <>
      <Container component="main" maxWidth="xs" sx={{ marginBottom: 10 }}>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1 }}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Crear cuenta
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Nombre de Usuario"
                  autoFocus
                  value={credentials.username}
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="first-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Nombre"
                  value={credentials.fullName}
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="last-name"
                  name="lastName"
                  required
                  fullWidth
                  id="lastName"
                  label="Apellidos"
                  value={credentials.fullName}
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Correo electrónico"
                  name="email"
                  autoComplete="email"
                  value={credentials.email}
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  value={credentials.password}
                  onChange={handleOnChange}
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        onClick={handleClickShowPassword}
                        sx={{ cursor: "pointer" }}
                      >
                        {showPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </InputAdornment>
                    ),
                  }}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="Recibir ofertas de nuestros socios"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Crear cuenta
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Typography variant="body2">
                  ¿Ya tiene una cuenta?
                  <Link to="/sign-in" style={{ marginLeft: 3 }}>
                    ¡Inicie sesión!
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default SignUp;
