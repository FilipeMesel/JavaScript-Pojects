import React from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeviceList from "./DeviceList";
import { useEffect, useState } from "react";

import axios from "axios";

function CompanyList(props) {
    const [goToDeviceList, setGoToDeviceList] = React.useState(0)
    const [selectedCompany, setSelectedCompany] = React.useState(0)
    const [rows, setRows] = useState([])

      useEffect(()=> {
        axios.get("http://localhost:3080/get-compannies").then(
            res => {
                setRows(res.data.response)
            }
        )
      },[])

      const deleteCompany = (idx) => {
        let URL = "http://localhost:3080/delete-companny/" + idx
        axios.delete(URL).then(
            res => {
                alert(res.data.message)
                window.location.reload(true)
            }
        )
      }

    const Devlist =(value) =>{
        if (value !== 0) {
            return (<DeviceList companyID = {value}/>)
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
                                                        <TableCell>Nome</TableCell>
                                                        <TableCell align="right">Estado</TableCell>
                                                        <TableCell align="right">Cidade</TableCell>
                                                        <TableCell align="right">Cep</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    <TableRow
                                                        key={row.name}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell component="th" scope="row">
                                                            {row.name}
                                                        </TableCell>
                                                        <TableCell align="right">{row.state}</TableCell>
                                                        <TableCell align="right">{row.citty}</TableCell>
                                                        <TableCell align="right">{row.cep}</TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableContainer>

                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="contained" sx={{ backgroundColor: 'green' }} onClick = {() =>setGoToDeviceList(row.id)}>Detalhes da Empresa</Button>
                                    <Button variant="contained" sx={{ backgroundColor: 'red' }}onClick = {() =>deleteCompany(row.id)}>Apagar Empresa</Button>
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

export default CompanyList