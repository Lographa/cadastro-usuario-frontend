import {
  Box,
  Collapse,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import { getUsers } from "../../services/api";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PropTypes from "prop-types";

function HomePage() {
  const { logout, deleteUser } = useContext(AuthContext);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [localUser, setLocalUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("token");
      const response = await getUsers(JSON.parse(token));

      setUser(response.data.tabela);
console.log(response)
      setLoading(false);
    })();
  }, []);

  const handleLogout = () => {
    logout();
  };

  const handleDeleteLogout = () => {
    deleteUser(localUser.resposta.cliente.id);
  };

  if (loading) {
    return <div className="loading">Carregando</div>;
  }


  return (
    <> <Box sx={{
      marginTop: 5,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: '100%'
  }}>
      <h1>home page</h1>
      <h3>
        Olá {localUser.resposta.nome} {localUser.resposta.sobrenome}
      </h3>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={handleDeleteLogout}>Deletar conta</button>
    </Box>
      
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell align="right">Nome</TableCell>
            <TableCell align="right">Sobrenome</TableCell>
            <TableCell align="right">Telefone</TableCell>
            <TableCell align="right">Nome fantasia</TableCell>
            <TableCell align="right">CNPJ</TableCell>
            <TableCell align="right">CEP</TableCell>
            <TableCell align="right">Cidade</TableCell>
            <TableCell align="right">Bairro</TableCell>
            <TableCell align="right">Endereço</TableCell>
            <TableCell align="right">Número</TableCell>
            <TableCell align="right">UF</TableCell>
            <TableCell align="right">Razão social</TableCell>
            <TableCell align="right">Complemento</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.map((row) => (
            <TableRow
              key={row.email}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.email}
              </TableCell>
              <TableCell align="right">{row.nome}</TableCell>
              <TableCell align="right">{row.sobrenome}</TableCell>
              <TableCell align="right">{row.telefone}</TableCell>
              <TableCell align="right">{row.cliente.nome_fantasia}</TableCell>
              <TableCell align="right">{row.cliente.cnpj}</TableCell>
              <TableCell align="right">{row.cliente.cep}</TableCell>
              <TableCell align="right">{row.cliente.cidade}</TableCell>
              <TableCell align="right">{row.cliente.bairro}</TableCell>
              <TableCell align="right">{row.cliente.endereco}</TableCell>
              <TableCell align="right">{row.cliente.numero}</TableCell>
              <TableCell align="right">{row.cliente.uf}</TableCell>
              <TableCell align="right">{row.cliente.razao_social}</TableCell>
              <TableCell align="right">{row.cliente.complemento}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

export default HomePage;
