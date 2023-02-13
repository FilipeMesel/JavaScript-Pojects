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

import DeviceDetails from './DeviceDetails'

import { useEffect, useState } from "react";

import axios from "axios";


function DeviceList(props) {
    const [deviceDetails, setDeviceDetails] = React.useState(0)
    const [deviceRows, setDeviceRows] = React.useState([])
    const [rows, setRows] = useState([])

    useEffect(()=> {
        let URL = "http://localhost:3080/get-devices/company/" + props.companyID
        axios.get(URL).then(
            res => {
                setRows(res.data.response)
            }
        )
    },[])
    
    const deleteDevice = (idx) => {
        let URL = "http://localhost:3080/delete-device/" + idx
        axios.delete(URL).then(
            res => {
                alert(res.data.message)
                window.location.reload(true)
            }
        )
      }


    function setDeviceDetailsAndRowsForAnalyse(value, rows) {
        deviceRows.push(rows)
        setDeviceRows(deviceRows)
        console.log("deviceRows: ", deviceRows)
        setDeviceDetails(value)
    }
    function gotToDeviceTabs(value) {
        if(value === 2) {
            return (
                <DeviceDetails device = {deviceRows}/>
            )
        } else {
            return (

                <div>
                {
                    rows.map(row => (
                        <Card sx={{ maxWidth: 1800, marginTop: 2, backgroundColor: "#cdcdcdcd" }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                // image="Automação 2.jpg"
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography variant="h8" color="text.secondary">
                                    <TableContainer component={Paper}>
                                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Apelido</TableCell>
                                                    <TableCell align="right">Serial do Equipamento</TableCell>
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
                                                    <TableCell align="right">{row.serialNumber}</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
    
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="contained" onClick = {()=>setDeviceDetailsAndRowsForAnalyse(2, row)} sx={{ backgroundColor: 'green' }} >Detalhes do Device</Button>
                                <Button variant="contained" sx={{ backgroundColor: 'red' }} onClick = {() =>deleteDevice(row.id)}>Apagar Device</Button>
                            </CardActions>
                        </Card>
                    ))
                }
            </div>
            )
        }
    }

    return (
        gotToDeviceTabs(deviceDetails)
    )
}

export default DeviceList