# IoT Dashboard API
A simple API that can be used to enable a database access by a front-end client web page and a IoT device end-point. This project was designed to be used with a database with three tables: Companies table, Devices table and devices log table.

# Getting Started with Create React App

Back end API project from a simple IoT monitoring System. If you want to run this code, just clone this git repository and type in command line:

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
 - /get-devices: Return all IoT devices from devices table
 - /get-devices/:id: Return a specific IoT device from devices table
 - /get-devices/company/:company: Return a list IoT devices from devices table where company label is setted in a get method
 - /post-device: Create a new device in devices table and a new log in devices log table. Only can be used if the system has a company in the company table.
 -/delete-device/:id This route will delete all device logs from device log table and delete the device with this id from devices table.

 - /get-compannies: Return all companies from companies table
 - /get-compannies/:id: Return a specific company from companies table
 - /post-compannies: Create a new company in companies table.
 -/delete-companny/:id This route will delete a copany from companies table. Only can be used if the company doesn't have devices.

 - /get-log/device/:id: Return monitoring log uploaded by IoT device from devices log
 - /get-log/device/period/:id/:date1/:date2: Return monitoring log uploaded by IoT device from devices log during a specific period of time between date1 and date2.

### IoT devices routes
Routes that can be accessed by any IoT device hardware end-point. In order to make this usable, the IoT device has to use the MAC ADDRESS to get from database your unique ID called "fk_systema".

 - /get-fk_sistema/:deviceMac: Return the id from a device with MAC ADDRESS equals to "deviceMac"
 - /post-log/device/:id: Return monitoring log uploaded by IoT device from devices log

## Data Base instructions for use case example
 1. Use XAMPP CONTROL to create a database named "gasdashboarddb"
 2. Create three tables using the three commands below:

 CREATE TABLE `gasdashboarddb`.`devices` ( `id` INT(255) NOT NULL AUTO_INCREMENT , `name` VARCHAR(255) NOT NULL , `serialNumber` VARCHAR(255) NOT NULL , `company` VARCHAR(255) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;

 CREATE TABLE `gasdashboarddb`.`companies` ( `id` INT(255) NOT NULL AUTO_INCREMENT , `name` VARCHAR(255) NOT NULL , `fantasyName` VARCHAR(255) NOT NULL , `state` VARCHAR(255) NOT NULL , `citty` VARCHAR(255) NOT NULL , `cep` VARCHAR(255) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;

CREATE TABLE `gasdashboarddb`.`deviceslog` ( `id` INT(255) NOT NULL AUTO_INCREMENT , `fk_sistema` INT(255) NOT NULL , `serialNumber` VARCHAR(255) NOT NULL , `company` INT(255) NOT NULL , `alarme` INT(255) NOT NULL , `variableValue` VARCHAR(255) NOT NULL , `timeStamp` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`id`)) ENGINE = InnoDB;


