import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
//Estilos
import "../estilos/login.css";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
      className="cuenta"
    >
      {"Copyright © "}
      <Link to="https://mui.com/" className="tmdb">
        TMDB By Lozano
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const Register = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [imagen, setImagen] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://tmdb-bylozano.onrender.com/api/users",
        {
          username: username,
          name: name,
          lastname: lastname,
          email: email,
          password: password,
          imagen: imagen,
        },
        {
          withCredentials: true,
          credentials: "include",
        },
        {
          headers: {
            "Access-Control-Allow-Origin":
              "https://tmdb-by-micaelalozano.vercel.app/",
          },
        }
      )
      .then((res) => res.data)
      .then(() => {
        navigate("/login");
      });
  };
  console.log("esto es", username, name, lastname, email, password, imagen);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage:
                "url(https://d500.epimg.net/cincodias/imagenes/2020/12/31/lifestyle/1609408585_467254_1609408795_noticia_normal.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                <strong> REGISTRARME </strong>
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Nombre de Usuario"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  color="error"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Nombre"
                  name="name"
                  autoComplete="name"
                  color="error"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Apellido"
                  name="lastname"
                  autoComplete="lastname"
                  color="error"
                  onChange={(e) => setLastname(e.target.value)}
                  value={lastname}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Correo Electronico"
                  name="email"
                  autoComplete="email"
                  color="error"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  color="error"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  id="imagen"
                  label="URL foto de Perfil"
                  name="imagen"
                  color="error"
                  onChange={(e) => setImagen(e.target.value)}
                  value={imagen}
                />
                <Button
                  color="error"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 1 }}
                >
                  REGISTRAR
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link to="/login" className="cuenta">
                      Ya tienes cuenta? Click aquí
                    </Link>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>{" "}
    </>
  );
};

export default Register;
