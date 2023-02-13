import { Card, CardContent, Button, TextField } from "@mui/material";
import { Alert, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import React from "react";

import { useEffect, useState } from "react";

import axios from "axios";

function DeviceRegister() {
    const [alias, setAlias] = useState('')
    const [serialNumber, setSerialNumber] = useState('')
    const [company, setCompany] = useState('')
    const [selectCompanies, setSelectCompanies] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3080/get-compannies").then(
            res => {
                setSelectCompanies(res.data.response)
            }
        )
    }, [])



    function registerProduct() {
        try {
            axios.post("http://localhost:3080/post-devices", {
                "name": alias,
                "serialNumber": serialNumber,
                "company": company
            }).then(res => {
                alert("O device IoT foi cadastrado na plataforma com sucesso")
            })
            .catch((err) => {
                <Alert severity="error">Device já foi cadastrado na plataforma</Alert>
            })
        } catch (e) {
            <Alert severity="error">Device já foi cadastrado na plataforma</Alert>
        }
    }

    return (
        <div>

            <Card>
                <CardContent>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ width: '60%', marginTop: '14px' }}>
                            <TextField value={alias} onChange={(e) => setAlias(e.target.value)} fullWidth id="outlined-basic" label="Apelido" variant="outlined" />
                        </div>

                        <div style={{ width: '60%', marginTop: '14px' }}>
                            <TextField value={serialNumber} onChange={(e) => setSerialNumber(e.target.value)} fullWidth id="outlined-basic" label="SerialDevice" variant="outlined" />
                        </div>

                        <div style={{ width: '60%', marginTop: '14px' }}>

                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Empresa</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={company}
                                    label="Empresas"
                                    onChange={(e) => setCompany(e.target.value)}
                                >
                                    {
                                        selectCompanies.map((c) => (
                                            <MenuItem value={c.id}>{c.name}</MenuItem>
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

export default DeviceRegister