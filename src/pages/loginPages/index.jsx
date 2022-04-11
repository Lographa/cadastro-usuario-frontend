import React, { useContext, useState } from "react";
import "./styles.css";
import { AuthContext } from "../../contexts/auth";
import {
  Box,
  Button,
  Container,
  createTheme,
  CssBaseline,
  FormControlLabel,
  TextField,
  ThemeProvider,
} from "@mui/material";
import FullScreenDialog from "../registerPage/MenuLateral";

const LoginPage = () => {
  const { authenticated, login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const theme = createTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", { email, password });

    login(email, password);
  };

  const htmlLoginPage = (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={onsubmit} 
            >
              Entrar
            </Button>
          </Box>
          <FullScreenDialog />
        </Box>
      </Container>
    </ThemeProvider>
  );

  return (
    <>
      {htmlLoginPage}
    </>
  );
};

export default LoginPage;
