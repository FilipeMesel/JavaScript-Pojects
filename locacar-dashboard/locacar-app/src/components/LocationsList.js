import React from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeviceList from "./EntittyList";
import { useEffect, useState } from "react";

import axios from "axios";

function LocationsList(props) {
    const [goToDeviceList, setGoToDeviceList] = React.useState(0)
    const [selectedCompany, setSelectedCompany] = React.useState(0)
    const [rows, setRows] = useState([])
    const [rowsClients, setRowsClients] = useState([])
    const [rowsEntitties, setRowsEntitties] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3080/locations").then(
            res => {
                setRows(res.data.response)
            }
        )

        axios.get("http://localhost:3080/clients").then(
            res => {
                // nome = res.data.response[0].nome
                setRowsClients(res.data.response)
            }
        )

        axios.get("http://localhost:3080/entities").then(
            res => {
                // nome = res.data.response[0].nome
                setRowsEntitties(res.data.response)
            }
        )
    }, [])

    const deleteCompany = (idx) => {
        let URL = "http://localhost:3080/location/" + idx
        axios.delete(URL).then(
            res => {
                alert("Processo de locação excluído com sucesso!")
                window.location.reload(true)
            }
        )
    }
    const carregarNomeCliente = (idCliente) => {
        let nome = "teste"
        rowsClients.map((rows) => {
            if (rows.id == idCliente) {
                // console.log(rows.nome)
                nome = rows.nome

            }
        })
        return nome
    }
    const carregarNomeEntitty = (idEntitty) => {
        let nome = "teste"
        rowsEntitties.map((rows) => {
            if (rows.id == idEntitty) {
                // console.log(rows.nome)
                nome = rows.placa

            }
        })
        return nome
    }

    const carregarModeloEntitty = (idEntitty) => {
        let nome = "teste"
        rowsEntitties.map((rows) => {
            if (rows.id == idEntitty) {
                // console.log(rows.nome)
                nome = rows.modelo

            }
        })
        return nome
    }
    const Devlist = (value) => {
        if (value !== 0) {
            return (<DeviceList companyID={value} />)
        } else {
            return (

                <div>
                    {
                        rows.map(row => (
                            <Card sx={{ maxWidth: 1800, marginTop: 2, backgroundColor: "#cdcdcdcd" }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image="Automação 2.jpg"
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography variant="h8" color="text.secondary">
                                        <TableContainer component={Paper}>
                                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Modelo do Veículo</TableCell>
                                                        <TableCell>Placa do Veículo</TableCell>
                                                        <TableCell align="right">Nome do Cliente</TableCell>
                                                        <TableCell align="right">Data de Início</TableCell>
                                                        <TableCell align="right">Data de Fim</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    <TableRow
                                                        key={row.idEntidade}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell component="th" scope="row">
                                                            {
                                                                carregarModeloEntitty(row.idEntidade)

                                                            }
                                                        </TableCell>
                                                        <TableCell component="th" scope="row">
                                                            {
                                                                carregarNomeEntitty(row.idEntidade)

                                                            }
                                                        </TableCell>
                                                        <TableCell align="right">
                                                            {
                                                                // row.idCliente
                                                                carregarNomeCliente(row.idCliente)
                                                            }
                                                        </TableCell>
                                                        <TableCell align="right">{row.initialDate}</TableCell>
                                                        <TableCell align="right">{row.finalDate}</TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableContainer>

                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {/* <Button variant="contained" sx={{ backgroundColor: 'green' }} onClick = {() =>setGoToDeviceList(row.id)}>Detalhes da Locação</Button> */}
                                    <Button variant="contained" sx={{ backgroundColor: 'red', borderRadius: 180 }} onClick={() => deleteCompany(row.id)}><DeleteIcon fontSize="small" /></Button>
                                </CardActions>
                            </Card>
                        ))
                    }
                </div>
            )
        }
    }
    return (

        Devlist(goToDeviceList)
    )
}

export default LocationsList