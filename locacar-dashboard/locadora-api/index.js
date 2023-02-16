const express = require("express");
const mysql = require("mysql2/promise")

var cors = require('cors')
const bodyParser = require("body-parser")

const app = express();
app.use(cors())
app.use(bodyParser.json())
const PORT = 3080

app.listen(PORT)
console.log("Cars API Started")

let DBCONNECTION =
{
    host: "localhost",
    user: "root",
    password: "",
    database: "locadoracarrosdb"
}

/**GET ENTITIES
 * Desc: Rota para listar todos as entidades de locação do sistema
 * Ret: <List>
 * Autor: Filipe Mesel Lobo Costa Cardoso <lipemesel@hotmail.com>
 * Data: 13/02/2023
 */
app.get("/entities", async (req, res, next) => {
    const connection = await mysql.createConnection(DBCONNECTION)

    let QUERY = "SELECT * FROM entidades"
    const [rows, fields] = await connection.execute(QUERY)
    await res.json({
        success: true,
        response: rows.reverse()
    })
});

/**GET ENTITIES BY ID
 * Desc: Rota para listar a entidade específica de locação do sistema
 * Ret: <List>
 * Autor: Filipe Mesel Lobo Costa Cardoso <lipemesel@hotmail.com>
 * Data: 13/02/2023
 */
app.get("/entities/:id", async (req, res, next) => {
    
    const connection = await mysql.createConnection(DBCONNECTION)

    let QUERY = "SELECT * FROM entidades WHERE `id` = " + "\"" + req.params.id + "\""
    const [rows, fields] = await connection.execute(QUERY)
    await res.json({
        success: true,
        response: rows
    })
});

/**GET ENTITIES BY PLACA
 * Desc: Rota para listar a entidade específica do sistema com a placa específica
 * Ret: <List>
 * Autor: Filipe Mesel Lobo Costa Cardoso <lipemesel@hotmail.com>
 * Data: 13/02/2023
 */
app.get("/entities/consultarPlaca/:placa", async (req, res, next) => {

    const connection = await mysql.createConnection(DBCONNECTION)

    let QUERY = "SELECT * FROM entidades WHERE `placa` = " + "\"" + req.params.placa + "\""
    const [rows, fields] = await connection.execute(QUERY)
    await res.json({
        success: true,
        response: rows
    })
});

/**POST ENTITTIES
 * Desc: Rota para cadastrar uma nova entidade no sistema
 * Ret: <List>
 * Autor: Filipe Mesel Lobo Costa Cardoso <lipemesel@hotmail.com>
 * Data: 13/02/2023
 */
app.post('/entities', async function (req, res) {
    const { placa, marca, modelo, ano, imagem } = req.body;
    let succcess = false;
    let response = {
        "placa": placa,
        "marca": marca,
        "modelo": modelo,
        "ano": ano,
        "imagem": imagem
    }

    const connection = await mysql.createConnection(DBCONNECTION)

    let QUERY = "SELECT * FROM entidades WHERE `placa` = " + "\"" + placa + "\""
    const [rows, fields] = await connection.execute(QUERY)
    if(rows.length === 0){
        succcess = true
        const [rows1, fields1] = await connection.execute(
            QUERY =  "INSERT INTO `entidades` (`id`, `placa`, `marca`, `modelo`, `ano`, `imagem`) VALUES (NULL, ?, ?, ?, ?, ?)",
                        [placa, marca, modelo, ano, imagem]
        )
        await res.json({
            success: succcess,
            response: response
        })

    } else {
        await res.json({
            success: succcess,
            response: "Não foi possível cadastrar a entidade"
        })
    }

});

/**DELETE ENTITTIES BY ID
 * Desc: Rota para deletar uma nova entidade do sistema
 * Ret: <List>
 * Autor: Filipe Mesel Lobo Costa Cardoso <lipemesel@hotmail.com>
 * Data: 13/02/2023
 */
app.delete('/entities/:id', async function (req, res) {
    let succcess = false;
    let response = "Entidade deletada com sucesso"
    
    
    const connection = await mysql.createConnection(DBCONNECTION)
    let QUERY = "DELETE FROM locations WHERE `idEntidade` = " + Number(req.params.id)
    const [rows, fields] = await connection.execute(QUERY)

    QUERY = "DELETE FROM entidades WHERE `id` = " + Number(req.params.id)
    const [rows2, fields2] = await connection.execute(QUERY)
    await res.json({
        success: succcess,
        response: response
    })
});

/**GET CLIENTS
 * Desc: Rota para listar todos os usuários do sistema
 * Ret: <List>
 * Autor: Filipe Mesel Lobo Costa Cardoso <lipemesel@hotmail.com>
 * Data: 13/02/2023
 */
app.get("/clients", async (req, res, next) => {
    const connection = await mysql.createConnection(DBCONNECTION)

    let QUERY = "SELECT * FROM clients"
    const [rows, fields] = await connection.execute(QUERY)
    await res.json({
        success: true,
        response: rows.reverse()
    })
});

/**GET CLIENTS BY ID
 * Desc: Rota para listar o cliente específico do sistema
 * Ret: <List>
 * Autor: Filipe Mesel Lobo Costa Cardoso <lipemesel@hotmail.com>
 * Data: 13/02/2023
 */
app.get("/clients/:id", async (req, res, next) => {

    
    const connection = await mysql.createConnection(DBCONNECTION)

    let QUERY = "SELECT * FROM clients WHERE `id` = " + "\"" + req.params.id + "\""
    const [rows, fields] = await connection.execute(QUERY)
    await res.json({
        success: true,
        response: rows
    })
});


/**POST CLIENTS
 * Desc: Rota para cadastrar um novo cliente no sistema
 * Ret: <List>
 * Autor: Filipe Mesel Lobo Costa Cardoso <lipemesel@hotmail.com>
 * Data: 13/02/2023
 */
app.post('/clients', async function (req, res) {

    const { nome, rg, cpf } = req.body;
    let succcess = false;

    let response = {
        "nome": nome,
        "rg": rg,
        "cpf": cpf
    }
    
    const connection = await mysql.createConnection(DBCONNECTION)

    let QUERY = "SELECT * FROM clients WHERE `rg` = " + "\"" + rg + "\""
    const [rows, fields] = await connection.execute(QUERY)
    if(rows.length === 0){
        succcess = true
        const [rows1, fields1] = await connection.execute(
            QUERY =  "INSERT INTO `clients` (`id`, `nome`, `rg`, `cpf`) VALUES (NULL, ?, ?, ?)",
                        [nome, rg, cpf]
        )
        await res.json({
            success: succcess,
            response: response
        })

    } else {
        await res.json({
            success: succcess,
            response: "Não foi possível cadastrar o cliente"
        })
    }
});

/**GET CLIENTS BY RG
 * Desc: Rota para listar o cliente específico do sistema com o rg específico
 * Ret: <List>
 * Autor: Filipe Mesel Lobo Costa Cardoso <lipemesel@hotmail.com>
 * Data: 13/02/2023
 */
app.get("/clients/consultarRg/:rg", async (req, res, next) => {
    const connection = await mysql.createConnection(DBCONNECTION)

    let QUERY = "SELECT * FROM clients WHERE `rg` = " + "\"" + req.params.rg + "\""
    const [rows, fields] = await connection.execute(QUERY)
    await res.json({
        success: true,
        response: rows
    })
});

/**DELETE CLIENTS BY ID
 * Desc: Rota para deletar um cliente do sistema
 * Ret: <List>
 * Autor: Filipe Mesel Lobo Costa Cardoso <lipemesel@hotmail.com>
 * Data: 13/02/2023
 */
app.delete('/clients/:id', async function (req, res) {
    let succcess = false;
    let response = "Cliente deletado com sucesso"
    
    const connection = await mysql.createConnection(DBCONNECTION)
    let QUERY = "DELETE FROM locations WHERE `idCliente` = " + Number(req.params.id)
    const [rows, fields] = await connection.execute(QUERY)

    QUERY = "DELETE FROM clients WHERE `id` = " + Number(req.params.id)
    const [rows2, fields2] = await connection.execute(QUERY)


    await res.json({
        success: succcess,
        response: response
    })
});

/**GET LOCATIONS
 * Desc: Rota para listar todos os usuários do sistema
 * Ret: <List>
 * Autor: Filipe Mesel Lobo Costa Cardoso <lipemesel@hotmail.com>
 * Data: 13/02/2023
 */
app.get("/locations", async (req, res, next) => {
    const connection = await mysql.createConnection(DBCONNECTION)

    let QUERY = "SELECT * FROM locations"
    const [rows, fields] = await connection.execute(QUERY)
    await res.json({
        success: true,
        response: rows.reverse()
    })
});

/**GET LOCATION BY ID
 * Desc: Rota para listar a locação específica do sistema
 * Ret: <List>
 * Autor: Filipe Mesel Lobo Costa Cardoso <lipemesel@hotmail.com>
 * Data: 13/02/2023
 */
app.get("/locations/:id", async (req, res, next) => {
    //const connection = await mysql.createConnection(DBCONNECTION)

    //let QUERY = "SELECT * FROM devices"
    //const [rows, fields] = await connection.execute(QUERY)
    
    const connection = await mysql.createConnection(DBCONNECTION)

    let QUERY = "SELECT * FROM locations WHERE `id` = " + "\"" + req.params.id + "\""
    const [rows, fields] = await connection.execute(QUERY)
    await res.json({
        success: true,
        response: rows
    })
});

/**POST locations
 * Desc: Rota para cadastrar uma nova locação no sistema
 * Ret: <List>
 * Autor: Filipe Mesel Lobo Costa Cardoso <lipemesel@hotmail.com>
 * Data: 13/02/2023
 */
app.post('/locations', async function (req, res) {



    const { idEntidade, idCliente, initialDate, finalDate } = req.body;
    let succcess = true;
    let response = {
        "idEntidade": idEntidade,
        "idCliente": idCliente,
        "initialDate": initialDate,
        "finalDate": finalDate
    }
    console.log("initialDate: ", initialDate)
    let partOfDate = initialDate.split("/");
    let dataInicioCadastrada = new Date(+partOfDate[2], +partOfDate[1] - 1, +partOfDate[0])
    partOfDate = finalDate.split("/");
    let dataFimCadastrada = new Date(+partOfDate[2], +partOfDate[1] - 1, +partOfDate[0])
    
    const connection = await mysql.createConnection(DBCONNECTION)

    let QUERY = "SELECT * FROM locations"
    const [rows, fields] = await connection.execute(QUERY)
    if(rows.length === 0){
        succcess = true
        const [rows1, fields1] = await connection.execute(
            QUERY =  "INSERT INTO `locations` (`id`, `idEntidade`, `idCliente`, `initialDate`, `finalDate`) VALUES (NULL, ?, ?, ?, ?)",
                        [idEntidade, idCliente, initialDate, finalDate]
        )
        await res.json({
            success: succcess,
            response: response
        })

    } else {
        
        rows?.map(location => {
            partOfDate = location?.finalDate.split("/");
            let dataFim = new Date(+partOfDate[2], +partOfDate[1] - 1, +partOfDate[0])
            partOfDate = location?.initialDate.split("/");
            let dataInicio = new Date(+partOfDate[2], +partOfDate[1] - 1, +partOfDate[0])
            console.log("Data cadastrada ", dataInicio, " e ", dataFim)

            if((location.idEntidade === idEntidade) && (
                (((dataInicioCadastrada <  dataInicio && dataFimCadastrada <  dataFim)) && dataFimCadastrada >= dataInicio) ||
                ((dataInicioCadastrada >=  dataInicio && dataFimCadastrada <=  dataFim)) ||
                ((dataInicioCadastrada >  dataInicio && dataFimCadastrada <  dataFim)) ||
                ((dataInicioCadastrada <=  dataInicio && dataFimCadastrada >=  dataFim)) ||
                ((dataInicioCadastrada ==  dataInicio && dataFimCadastrada ==  dataFim)) ||
                (dataInicioCadastrada >=  dataInicio && dataInicioCadastrada <  dataFim)
            )) {
                
                succcess= false
                response = "Erro ao cadastrar uma nova locação"
            }
        })
        if (succcess === true) {
            const [rows3, fields3] = await connection.execute(
                QUERY =  "INSERT INTO `locations` (`id`, `idEntidade`, `idCliente`, `initialDate`, `finalDate`) VALUES (NULL, ?, ?, ?, ?)",
                            [idEntidade, idCliente, initialDate, finalDate]
            )
            await res.json({
                success: succcess,
                response: response
            })

        }else {
            await res.json({
                success: succcess,
                response: "Não foi possível cadastrar o cliente"
            })
        }
    }
});

/**DELETE LOCATION BY ID
 * Desc: Rota para deletar um cliente do sistema
 * Ret: <List>
 * Autor: Filipe Mesel Lobo Costa Cardoso <lipemesel@hotmail.com>
 * Data: 13/02/2023
 */
app.delete('/location/:id', async function (req, res) {
    let succcess = true;
    let response = "Registro de locação deletado com sucesso"
    
    const connection = await mysql.createConnection(DBCONNECTION)
    let QUERY = "DELETE FROM locations WHERE `id` = " + Number(req.params.id)
    const [rows, fields] = await connection.execute(QUERY)
    await res.json({
        success: succcess,
        response: response
    })
});