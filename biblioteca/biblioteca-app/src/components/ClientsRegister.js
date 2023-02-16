import { Card, CardContent, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

function ClientsRegister() {
    const [fullName, setFullName] = useState('')
    const [rg, setRg] = useState('')
    const [cpf, setCpf] = useState('')

    function registerCategory() {
        axios.post("http://localhost:3080/clients", {
            "nome": fullName.toUpperCase(), 
            "rg": rg.toUpperCase(), 
            "cpf": cpf.toUpperCase()
        }).then(res => {
            alert("O Cliente foi cadastrado com sucesso")
            window.location.reload(true)
        })
    }

    return (
        <div>

            <Card>
                <CardContent>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ width: '60%', marginTop: '14px' }}>
                            <TextField value = {fullName} onChange = {(e) => setFullName(e.target.value)} fullWidth id="outlined-basic" label="Nome Completo do cliente" variant="outlined" />
                        </div>

                        <div style={{ width: '60%', marginTop: '14px' }}>
                            <TextField  value = {rg} onChange = {(e) => setRg(e.target.value)} fullWidth id="outlined-basic" label="Número de identidade" variant="outlined" />
                        </div>

                        <div style={{ width: '60%', marginTop: '14px' }}>
                            <TextField value = {cpf} onChange = {(e) => setCpf(e.target.value)} fullWidth id="outlined-basic" label="Número de CPF" variant="outlined" />
                        </div>

                        <div style={{ width: '60%', display: 'flex', marginTop: '14px', justifyContent: 'right' }}>
                            <Button onClick={()=> registerCategory()} variant="contained">Salvar</Button>
                        </div>

                    </div>

                </CardContent>
            </Card>
        </div>
    )
}

export default ClientsRegister