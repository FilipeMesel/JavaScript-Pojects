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

import { useEffect, useState } from "react";

import axios from "axios";


function EntittyList(props) {
    const [deviceRows, setDeviceRows] = React.useState([])
    const [rows, setRows] = useState([])

    useEffect(() => {
        let URL = "http://localhost:3080/entities"
        axios.get(URL).then(
            res => {
                console.log(res.data.response)
                setRows(res.data.response)
            }
        )
    }, [])

    const deleteDevice = (idx) => {
        let URL = "http://localhost:3080/entities/" + idx
        axios.delete(URL).then(
            res => {
                alert("Veículo excluído do sistema!")
                window.location.reload(true)
            }
        )
    }
    return (

        <div>
            {
                rows.map(row => (
                    <Card sx={{ maxWidth: 1800, marginTop: 2, backgroundColor: "#cdcdcdcd" }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={row.imagem}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography variant="h8" color="text.secondary">
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Id</TableCell>
                                                <TableCell align="right">Título do livro</TableCell>
                                                <TableCell align="right">Autor do livro</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow
                                                key={row.id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {row.id}
                                                </TableCell>
                                                <TableCell align="right">{row.titulo}</TableCell>
                                                <TableCell align="right">{row.autor}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>

                            </Typography>
                        </CardContent>
                        <CardActions>
                            {/* <Button variant="contained" onClick = {()=>setDeviceDetailsAndRowsForAnalyse(2, row)} sx={{ backgroundColor: 'green' }} >Detalhes do Carro</Button> */}
                            <Button variant="contained" sx={{ backgroundColor: 'red', borderRadius: 180 }} onClick={() => deleteDevice(row.id)}><DeleteIcon fontSize="small" /></Button>
                        </CardActions>
                    </Card>
                ))
            }
        </div>
    )
}

export default EntittyList