const express = require("express");
const mysql = require("mysql2/promise")

var cors = require('cors')
const bodyParser = require("body-parser")

const app = express();
app.use(cors())
app.use(bodyParser.json())
const PORT = 3080

app.listen(PORT)
console.log("IoT API Started")
let DBCONNECTION =
{
    host: "localhost",
    user: "root",
    password: "",
    database: "gasdashboarddb"
}

/**GET DEVICES
 * Desc: Rota para listar todos os devices do sistema
 * Ret: <List>
 * Autor: Filipe Mesel Lobo Costa Cardoso <lipemesel@hotmail.com>
 * Data: 08/02/2023
 */
app.get("/get-devices", async (req, res, next) => {
    const connection = await mysql.createConnection(DBCONNECTION)

    let QUERY = "SELECT * FROM devices"
    const [rows, fields] = await connection.execute(QUERY)
    await res.json({
        success: true,
        response: rows
    })
});

/**GET DEVICES BY ID
 * Desc: Rota para listar o device com o id específico
 * Ret: <List>
 * Autor: Filipe Mesel Lobo Costa Cardoso <lipemesel@hotmail.com>
 * Data: 08/02/2023
 */
app.get("/get-devices/:id", async (req, res, next) => {
    let id = req.params.id
    // var RES = [];
    // testeListaDevices.forEach(function (item) {
    //     console.log(item.company)
    //     if (Number(item.id) === Number(id)) {
    //         RES.push(item)
    //     }
    // });
    const connection = await mysql.createConnection(DBCONNECTION)

    let QUERY = "SELECT * FROM devices WHERE `id` = " + "\"" + id + "\""
    const [rows, fields] = await connection.execute(QUERY)

    await res.json({
        success: true,
        response: rows
    })
});

/**GET DEVICES BY COMPANY ID
 * Desc: Rota para listar o device com o id específico
 * Ret: <List Element>
 * Autor: Filipe Mesel Lobo Costa Cardoso <lipemesel@hotmail.com>
 * Data: 08/02/2023
 */
app.get("/get-devices/company/:company", async (req, res, next) => {
    let Cid = req.params.company
    const connection = await mysql.createConnection(DBCONNECTION)

    let QUERY = "SELECT * FROM devices WHERE `company` = " + "\"" + Cid + "\""
    const [rows, fields] = await connection.execute(QUERY)

    await res.json({
        success: true,
        response: rows
    })
});

/**POST DEVICES
 * Desc: Rota para add um novo device a uma empresa já criada
 * É PRECISO QUE A EMPRESA JÁ ESTEJA CRIADA ANTES
 * Ret: str "Empresa cadastrado"....ou "Empresa já existente"
 * Autor: Filipe Mesel Lobo Costa Cardoso <lipemesel@hotmail.com>
 * Data: 08/02/2023
 */
app.post('/post-devices', async function (req, res) {
    const { name, serialNumber, company } = req.body;

    //TODO
    /**
     * Verificar se o device já existe no sistema usando o serialNumber
     * Se já existe, retornar erro 500 com a msg "Device já existe na plataforma"
     * Se não existe, deve criar o device e criar um log inicial na tabela de logs
     */
    let serial = serialNumber.toUpperCase()

    const connection = await mysql.createConnection(DBCONNECTION)
    
    let QUERY = "SELECT * FROM devices WHERE `serialNumber` = \"" + serialNumber + "\""
    const [rows, fields] = await connection.execute(QUERY)
    if (rows.length === 0) {
        const [rows1, fields1] = await connection.execute(
            "INSERT INTO `devices` (`id`, `name`, `serialNumber`, `company`) VALUES (NULL, ?, ?, ?)",
            [name, serial, company]
        )
        let QUERY = "SELECT `id` FROM `devices` WHERE `serialNumber` = \"" +  serial + "\""
        const [rows2, fields2] = await connection.execute(QUERY)

        let fk_sistema = Number(rows2[0].id)

        const [rows3, fields3] = await connection.execute(
            "INSERT INTO `deviceslog` (`id`, `fk_sistema`, `serialNumber`, `company`, `alarme`, `variableValue`) VALUES (NULL, ?, ?, ?, 0, 0)",
            [fk_sistema, serial, company]
        )
        
    } else {
        return res.status(500).json({
            message: "Device já cadastrado!",
        });

    }


    return res.status(200).json({
        message: "Device cadastrado com sucesso!",
    });
});

/**DELETE DEVICE BY ID
 * Desc: Rota para deletar um device do sistema
 * É PRECISO O DEVICE JÁ ESTEJA CADASTRADO NO SISTEMA
 * Ret: str "Device deletado"....ou "Device não existe"
 * Autor: Filipe Mesel Lobo Costa Cardoso <lipemesel@hotmail.com>
 * Data: 08/02/2023
 */
app.delete('/delete-device/:id', async function (req, res) {

    //TODO
    /**
     * Verificar se a device já existe no sistema usando o ID
     * Se já existe, apagar o device e apagar os logs da tabela de logs
     */
    
    const connection = await mysql.createConnection(DBCONNECTION)

    let QUERY = "DELETE FROM devices WHERE `id` = " + Number(req.params.id)
    const [rows, fields] = await connection.execute(QUERY) //, req.params.id
    QUERY = "DELETE FROM deviceslog WHERE `fk_sistema` = " + Number(req.params.id)
    const [rows1, fields1] = await connection.execute(QUERY) //, req.params.id

    return res.status(200).json({
        message: "Device deletado com sucesso!",
    });
});

/**GET COPANIES
 * Desc: Rota para listar todas as empresas do sistema
 * Ret: <List>
 * Autor: Filipe Mesel Lobo Costa Cardoso <lipemesel@hotmail.com>
 * Data: 08/02/2023
 */
app.get("/get-compannies", async (req, res, next) => {
    const connection = await mysql.createConnection(DBCONNECTION)

    let QUERY = "SELECT * FROM companies"
    const [rows, fields] = await connection.execute(QUERY)
    await res.json({
        success: true,
        response: rows
    })
});

/**GET COPANIES by id
 * Desc: Rota para listar a empresa com id específico
 * Ret: <List Element>
 * Autor: Filipe Mesel Lobo Costa Cardoso <lipemesel@hotmail.com>
 * Data: 08/02/2023
 */
app.get("/get-compannies/:id", async (req, res, next) => {
    let id = req.params.id

    const connection = await mysql.createConnection(DBCONNECTION)

    let QUERY = "SELECT * FROM companies WHERE `id` = " + "\"" + id + "\""
    const [rows, fields] = await connection.execute(QUERY)

    await res.json({
        success: true,
        response: rows
    })
});

/**POST DEVICES
 * Desc: Rota para add um novo device a uma empresa já criada
 * É PRECISO QUE A EMPRESA JÁ ESTEJA CRIADA ANTES
 * Ret: str "Empresa cadastrado"....ou "Empresa já existente"
 * Autor: Filipe Mesel Lobo Costa Cardoso <lipemesel@hotmail.com>
 * Data: 08/02/2023
 */
app.post('/post-compannies', async function (req, res) {
    const { name, fantasyName, citty, state, cep } = req.body;

    const connection = await mysql.createConnection(DBCONNECTION)

    let QUERY = "SELECT * FROM companies WHERE `fantasyName` = \"" + fantasyName + "\""
    const [rows, fields] = await connection.execute(QUERY)
    if (rows.length === 0) {
        const [rows1, fields1] = await connection.execute(
            "INSERT INTO `companies` (`id`, `name`, `fantasyName`, `citty`, `state`, `cep`) VALUES (NULL, ?, ?, ?, ?, ?)",
            [name, fantasyName, citty, state, cep]
        )
    } else {
        return res.status(500).json({
            message: "Empresa já cadastrada!",
        });

    }

    return res.status(200).json({
        message: "Empresa cadastrada com sucesso!",
    });
});

/**DELETE COMPANY BY ID
 * Desc: Rota para deletar uma empresa do sistema
 * É PRECISO A EMPRESA JÁ ESTEJA CADASTRADA NO SISTEMA E SEM DEVICES ASSOCIADOS
 * Ret: str "Empresa deletado"....ou "Empresa não existe"
 * Autor: Filipe Mesel Lobo Costa Cardoso <lipemesel@hotmail.com>
 * Data: 08/02/2023
 */
app.delete('/delete-companny/:id', async function (req, res) {

    //TODO
    /**
     * Verificar se a empresa já existe no sistema usando o ID
     * Se já existe, verificar se tem devices associados
     * Se não tiver, apagar a empresa da plataforma
     * Se não existe, informar que a empresa é inexistente
     * Se tiver device, informar que a empresa não pode ser deletada porque tem devices no sistema
     */
    const connection = await mysql.createConnection(DBCONNECTION)

    let QUERY = "DELETE FROM companies WHERE `id` = " + Number(req.params.id)
    const [rows, fields] = await connection.execute(QUERY) //, req.params.id

    return res.status(200).json({
        message: "Empresa deletada com sucesso!",
    });
});

/**GET LOGs by id
 * Desc: Rota para listar os logs de um device específico
 * Ret: <List Element>
 * Autor: Filipe Mesel Lobo Costa Cardoso <lipemesel@hotmail.com>
 * Data: 08/02/2023
 */
app.get("/get-log/device/:id", async (req, res, next) => {
    let id = req.params.id
    // let LOGs = {}
    const connection = await mysql.createConnection(DBCONNECTION)
    let QUERY = "SELECT * FROM deviceslog WHERE `fk_sistema` = " + "\"" + id + "\""
    const [rows, fields] = await connection.execute(QUERY)

    await res.json({
        success: true,
        response: rows.reverse()
    })
});

/**GET LOGs by id, date1 and date2
 * Desc: Rota para listar os logs de um device específico em um período de tempo específico
 * Ret: <List Element>
 * Autor: Filipe Mesel Lobo Costa Cardoso <lipemesel@hotmail.com>
 * Data: 08/02/2023
 */
app.get("/get-log/device/period/:id/:date1/:date2", async (req, res, next) => {
    let id = req.params.id
    let date1 = req.params.date1
    let date2 = req.params.date2
    console.log(id)
    console.log(date1)
    console.log(date2)
    const connection = await mysql.createConnection(DBCONNECTION)
    let QUERY = "SELECT * FROM deviceslog WHERE `fk_sistema` = " + "'" + id + "'" + "AND `timeStamp` BETWEEN \"" +  date1 + "\"" + "AND" + "\"" + date2 + "\""
    // let QUERY = "SELECT * FROM `deviceslog` WHERE `fk_sistema` = " + id + "AND `timeStamp` BETWEEN" +  "\"" +  date1 + "\"" + "AND" + "\"" + date2 + "\""
    
    console.log(QUERY)
    const [rows2, fields2] = await connection.execute(QUERY)

    await res.json({
        success: true,
        response: rows2
    })
});

/**GET FK_SISTEMA by device mac
 * Desc: Rota para listar o id do device por meio de seu mac
 * Ret: <Element>
 * Autor: Filipe Mesel Lobo Costa Cardoso <lipemesel@hotmail.com>
 * Data: 08/02/2023
 */
app.get("/get-fk_sistema/:deviceMac", async (req, res, next) => {
    let id = req.params.deviceMac
    const connection = await mysql.createConnection(DBCONNECTION)
    let QUERY = "SELECT `id` FROM `devices` WHERE `serialNumber` = \"" +  id + "\""
    const [rows2, fields2] = await connection.execute(QUERY)
    await res.json({
        success: true,
        response: rows2[0].id
    })
});

/**POST LOGs
 * Desc: Rota para add um novo log de um device específico na tabela de logs
 * É PRECISO QUE O DEVICE JÁ ESTEJA CRIADO ANTES
 * Ret: str "Log cadastrado"
 * Autor: Filipe Mesel Lobo Costa Cardoso <lipemesel@hotmail.com>
 * Data: 08/02/2023
 */
app.post('/post-log/device', async function (req, res) {
    const { serialNumber, variable, alarme } = req.body;

    //TODO
    /**
     * Verificar se a empresa já existe no sistema usando o nome fantasia
     * Se já existe, retornar erro 500 com a msg "Empresa já existe na plataforma"
     * Se não existe, deve criar a empresa
     */
    console.log("id: ", req.params.id)
    let serial = serialNumber.toUpperCase()
    const connection = await mysql.createConnection(DBCONNECTION)
    let QUERY = "SELECT `company`, `id` FROM `devices` WHERE `serialNumber` = \"" + serial + "\""
    const [rows2, fields2] = await connection.execute(QUERY)
    let company = Number(rows2[0].company)
    let fk_sistema = Number(rows2[0].id)
    const [rows3, fields3] = await connection.execute(
        "INSERT INTO `deviceslog` (`id`, `fk_sistema`, `serialNumber`, `company`, `alarme`, `variableValue`) VALUES (NULL, ?, ?, ?, ?, ?)",
        [fk_sistema, serial, company, alarme, variable]
    )

    return res.status(200).json({
        message: "Log cadastrado com sucesso!",
    });
});