import { Card, CardContent, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

function EntittiyRegister() {
    const [placa, setPlaca] = useState('')
    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')
    const [ano, setAno] = useState('')
    const [foto, setFoto] = useState('')

    function registerCategory() {
        axios.post("http://localhost:3080/entities", {
            "placa": placa.toUpperCase(),
            "marca": marca.toUpperCase(),
            "modelo": modelo.toUpperCase(),
            "ano": ano.toUpperCase(),
            "imagem": foto
        }).then(res => {
            alert("O Veículo foi cadastrado com sucesso")
            window.location.reload(true)
        })
    }

    return (
        <div>

            <Card>
                <CardContent>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ width: '60%', marginTop: '14px' }}>
                            <TextField value={placa} onChange={(e) => setPlaca(e.target.value)} fullWidth id="outlined-basic" label="Digite a placa do veículo" variant="outlined" />
                        </div>

                        <div style={{ width: '60%', marginTop: '14px' }}>
                            <TextField value={marca} onChange={(e) => setMarca(e.target.value)} fullWidth id="outlined-basic" label="Digite a marca do fabricante" variant="outlined" />
                        </div>

                        <div style={{ width: '60%', marginTop: '14px' }}>
                            <TextField value={modelo} onChange={(e) => setModelo(e.target.value)} fullWidth id="outlined-basic" label="Dígite o modelo do veículo" variant="outlined" />
                        </div>

                        <div style={{ width: '60%', marginTop: '14px' }}>
                            <TextField value={ano} onChange={(e) => setAno(e.target.value)} fullWidth id="outlined-basic" label="Digite o ano de fabricação do veículo" variant="outlined" />
                        </div>

                        <div style={{ width: '60%', marginTop: '14px' }}>
                            <TextField value={foto} onChange={(e) => setFoto(e.target.value)} fullWidth id="outlined-basic" label="Adicione uma foto ao sistema" variant="outlined" />
                        </div>

                        <div style={{ width: '60%', display: 'flex', marginTop: '14px', justifyContent: 'right' }}>
                            <Button onClick={() => registerCategory()} variant="contained">Salvar</Button>
                        </div>

                    </div>

                </CardContent>
            </Card>
        </div>
    )
}

export default EntittiyRegister