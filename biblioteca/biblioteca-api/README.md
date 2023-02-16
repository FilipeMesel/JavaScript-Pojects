# Locations Dashboard API
A simple API that can be used to enable a database access by a front-end client web page for any locations examples like cars locations and libraries. This project was designed to be used with a database with three tables: Clients table, Entities table and locations table.

# Getting Started with Create React App

Back end API project from a simple Locations Dashboard system. If you want to run this code, just clone this git repository and type in command line:

npm install
node index.js

# This Web app project was built with:

 - express: Mycrosservices JavaScript package
 - mysql2: SQL DataBase manager
 - body parser: Auxiliary package
 - cors: Auxiliary Package

# Available Scripts

In the project directory, you can see a component list with:

 - index.js: Java Script file that's represents a API with HTTP Routes to manage a MySQL database.

## index.js routes

### Front-end routes
Routes that can be accessed by any front-end web page
 - GET /entities: Return all enitties from entitties table.
 - GET /entities/:id: Return a specific entitty from entitties table using ID parameter.
 - GET /entities/consultarPlaca/:placa:  Return a specific entitty from entitties table using PLACA parameter.
 - POST /entities: Create a new entitty in entitties table.
 - DELETE /entities/:id This route will delete all entitty from entitties table and delete all locations from locations table.

 - GET /clients: Return all clients from clients table.
 - GET /clients/:id: Return a specific client from clients table.
 - POST /clients: Create a new client in clients table.
 - GET /clients/consultarRg/:rg Return a specific client from clients table.
- DELETE /clients/:id: Delete a specific client from clients table.

 - GET /locations: Return locations from locations table.
 - GET /locations/:id: Return a specific location from locations table.
 - POST /locations: Create a new location in locations table.
 - DELETE /location/:id: Delete a specific location from locations table.

## Data Base instructions for use case example
 1. Use XAMPP CONTROL to create a database named "locadoracarrosdb"
 2. Create three tables using the three commands below:

CREATE TABLE `locadoracarrosdb`.`entidadesbiblioteca` ( `id` INT(255) NOT NULL AUTO_INCREMENT , `titulo` VARCHAR(255) NOT NULL , `autor` VARCHAR(255) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;

CREATE TABLE `locadoracarrosdb`.`clients` ( `id` INT(255) NOT NULL AUTO_INCREMENT , `nome` VARCHAR(255) NOT NULL , `rg` VARCHAR(255) NOT NULL , `cpf` VARCHAR(255) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;

CREATE TABLE `locadoracarrosdb`.`locations` ( `id` INT(255) NOT NULL AUTO_INCREMENT , `idEntidade` INT(255) NOT NULL , `idCliente` INT(255) NOT NULL , `initialDate` VARCHAR(255) NOT NULL , `finalDate` VARCHAR(255) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;


