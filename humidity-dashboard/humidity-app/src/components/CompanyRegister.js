import { Card, CardContent, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

function CompanyRegister() {
    const [name, setName] = useState('')
    const [fantasyName, setFantasyName] = useState('')
    const [citty, setCitty] = useState('')
    const [state, setState] = useState('')
    const [cep, setCep] = useState('')

    function registerCategory() {
        axios.post("http://localhost:3080/post-compannies", {
            "name": name, 
            "fantasyName": fantasyName.toUpperCase(), 
            "citty": citty.toUpperCase(), 
            "state": state.toUpperCase(), 
            "cep": cep
        }).then(res => {
            alert("A Empresa foi cadastrada com sucesso")
            window.location.reload(true)
        })
    }

    return (
        <div>

            <Card>
                <CardContent>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ width: '60%', marginTop: '14px' }}>
                            <TextField value = {fantasyName} onChange = {(e) => setFantasyName(e.target.value)} fullWidth id="outlined-basic" label="Nome Fantasia" variant="outlined" />
                        </div>

                        <div style={{ width: '60%', marginTop: '14px' }}>
                            <TextField  value = {name} onChange = {(e) => setName(e.target.value)} fullWidth id="outlined-basic" label="Nome" variant="outlined" />
                        </div>

                        <div style={{ width: '60%', marginTop: '14px' }}>
                            <TextField value = {state} onChange = {(e) => setState(e.target.value)} fullWidth id="outlined-basic" label="Estado" variant="outlined" />
                        </div>

                        <div style={{ width: '60%', marginTop: '14px' }}>
                            <TextField value = {citty} onChange = {(e) => setCitty(e.target.value)} fullWidth id="outlined-basic" label="Cidade" variant="outlined" />
                        </div>

                        <div style={{ width: '60%', marginTop: '14px' }}>
                            <TextField value = {cep} onChange = {(e) => setCep(e.target.value)} fullWidth id="outlined-basic" label="CEP" variant="outlined" />
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

export default CompanyRegister