import { Card, CardContent, Button, TextField } from "@mui/material";
import { Alert, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import React from "react";

import { useEffect, useState } from "react";

import axios from "axios";

function LocationRegister() {
    const [dataInicial, setDataInicial] = useState('')
    const [dataFinal, setDataFinal] = useState('')
    const [entitties, setEntitties] = useState('')
    const [selectEntitty, setSelectEntitty] = useState([])
    const [clients, setClients] = useState('')
    const [selectClient, setSelectClient] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3080/entities").then(
            res => {
                setSelectEntitty(res.data.response)
            }
        )
        axios.get("http://localhost:3080/clients").then(
            res => {
                setSelectClient(res.data.response)
            }
        )
    }, [])



    function registerProduct() {
        console.log("dataInicial: ", dataInicial)
        console.log("dataFinal: ", dataFinal)
        var tempDate = new Date(dataInicial);
        let DAY = tempDate.getDate() + 1
        if(DAY < 10) {
            DAY = "0" + String(DAY)
        }
        let MONTH = tempDate.getMonth() + 1
        if(MONTH < 10) {
            MONTH = "0" + String(MONTH)
        }
        var firstDate = String([DAY, MONTH, tempDate.getFullYear()].join("/"));

        
        tempDate = new Date(dataFinal);
        DAY = tempDate.getDate() + 1
        if(DAY < 10) {
            DAY = "0" + String(DAY)
        }
        MONTH = tempDate.getMonth() + 1
        if(MONTH < 10) {
            MONTH = "0" + String(MONTH)
        }
        var secondDate = String([DAY, MONTH, tempDate.getFullYear()].join("/"));
        //var secondDate = String([tempDate.getDate() + 1, tempDate.getMonth() + 1, tempDate.getFullYear()].join("/"));
        console.log("firstDate: ", firstDate)
        console.log("dataFinal: ", secondDate)
        try {
            axios.post("http://localhost:3080/locations", {
                "idEntidade": entitties,
                "idCliente": clients,
                "initialDate": firstDate,
                "finalDate": secondDate
            }).then(res => {
                if(res.data.success == false) {
                    alert("Veículo não agendado. Já existe um agendamento nesses dias")
                }else {
                    alert("Veículo agendado com sucesso!")
                    window.location.reload(true)
                }
            })
                .catch((err) => {
                    <Alert severity="error">Veículo não agendado. Já existe um agendamento nesses dias</Alert>
                })
        } catch (e) {
            <Alert severity="error">Veículo não agendado. Já existe um agendamento nesses dias</Alert>
        }
    }

    return (
        <div>

            <Card>
                <CardContent>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ width: '60%', marginTop: '14px' }}>
                            <TextField type={'date'} value={dataInicial} onChange={(e) => setDataInicial(e.target.value)} fullWidth id="outlined-basic" label="" variant="outlined" />
                        </div>

                        <div style={{ width: '60%', marginTop: '14px' }}>
                            <TextField type={'date'} value={dataFinal} onChange={(e) => setDataFinal(e.target.value)} fullWidth id="outlined-basic" label="" variant="outlined" />
                        </div>

                        <div style={{ width: '60%', marginTop: '14px' }}>

                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Veículo</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={entitties}
                                    label="Veículo"
                                    onChange={(e) => setEntitties(e.target.value)}
                                >
                                    {
                                        selectEntitty.map((c) => (
                                            <MenuItem value={c.id}>{c.modelo}: {c.placa}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>


                        </div>

                        <div style={{ width: '60%', marginTop: '14px' }}>

                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Cliente</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={clients}
                                    label="Cliente"
                                    onChange={(e) => setClients(e.target.value)}
                                >
                                    {
                                        selectClient.map((c) => (
                                            <MenuItem value={c.id}>{c.nome}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>


                        </div>



                        <div style={{ width: '60%', display: 'flex', marginTop: '14px', justifyContent: 'right' }}>
                            <Button onClick={() => { registerProduct() }} variant="contained">Salvar</Button>
                        </div>

                    </div>

                </CardContent>
            </Card>
        </div>
    )
}

export default LocationRegister