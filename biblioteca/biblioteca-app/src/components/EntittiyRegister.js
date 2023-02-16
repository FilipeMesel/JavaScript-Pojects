import { Card, CardContent, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

function EntittiyRegister() {
    const [titulo, setTitulo] = useState('')
    const [autor, setAutor] = useState('')

    function registerCategory() {
        axios.post("http://localhost:3080/entities", {
            "titulo": titulo.toUpperCase(),
            "autor": autor.toUpperCase(),
        }).then(res => {
            alert("O livro foi cadastrado com sucesso")
            window.location.reload(true)
        })
    }

    return (
        <div>

            <Card>
                <CardContent>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ width: '60%', marginTop: '14px' }}>
                            <TextField value={titulo} onChange={(e) => setTitulo(e.target.value)} fullWidth id="outlined-basic" label="Digite o título do livro" variant="outlined" />
                        </div>

                        <div style={{ width: '60%', marginTop: '14px' }}>
                            <TextField value={autor} onChange={(e) => setAutor(e.target.value)} fullWidth id="outlined-basic" label="Digite o autor(a) do livro" variant="outlined" />
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