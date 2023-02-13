# Project Description

This is a simple front end ReactJs project that interact with a NodeJs API to create a Gat IoT monitoring system with:

1. A initial web page that show you a list of companies:
![JSProjectFrontend1](https://user-images.githubusercontent.com/54197776/218363024-9f324240-9e07-45fd-bf85-19d41a16c3e9.png)

2. Another page that show you a list of devices registered by the company:
![JSProjectFrontend2](https://user-images.githubusercontent.com/54197776/218363099-2d1a0487-f1d5-4324-b285-98688018bf39.png)

3. A Device details with some charts and tables:
![JSProjectFrontend3](https://user-images.githubusercontent.com/54197776/218363146-b203cc57-8b93-431a-a191-8c5ecc83cad7.png)
![JSProjectFrontend4](https://user-images.githubusercontent.com/54197776/218363165-e14ebed8-7c08-45bc-9b04-4f9878f2df53.png)

4. Option to share data in .pdf or .csv format:
![JSProjectFrontend5](https://user-images.githubusercontent.com/54197776/218363209-0002c459-f087-40eb-8a24-f220382366bc.png)


# Getting Started with Create React App

Front end project from a simple IoT Gas monitoring System. If you want to run this code, just clone this git repository and type in command line:

npm install
npm start

# This Web app project was built with:

 - ReactJs Library features and tools
 - Material Ui library of components and icons [https://mui.com/material-ui/getting-started/overview/]
 - Axios Library [npm i axios]
 - jspdf Pdf file sharing library [https://www.npmjs.com/package/jspdf-react]
 - simple-timefield Auxiliary library to enable a input type field for generate data in pdf file [https://www.npmjs.com/package/react-simple-timefield]
 - SheetJS Library to enable a input type field for generate data in excel file [https://docs.sheetjs.com/docs/]
 - react-apexcharts A simple chart kit [https://www.npmjs.com/package/react-apexcharts]

# Available Scripts

In the project directory, you can see a component list with:

 - CompanyList.js: Java Script file that's represents a list of companies registered by user.
 - ConpanyRegister.js: Java Script file that's represents a new company registration.
 - DeviceList.js: Java Script file that's represents a list of devices registered by user.
 - DeviceRegister.js: Java Script file that's represents a new comdevice registration.
 - DeviceDetails.js: Java Script file that's where you can see more information about a single IoT device.
 - Menu.js: Java Script file that's represents a Menu bar for navegation.

## CompanyList.js
This component uses a React HOOKs (useEffect) to interact (using Axios) with an API for get information about a company table into a MySQL database.
You can delete a company from data base too.

## ConpanyRegister.js
This component uses a React features to create a simple form where you can add a new company into a table from a MySQL Database. For that, it interacts with an API whith Axios.

## DeviceList.js
This component uses a React HOOKs (useEffect) to interact (using Axios) with an API for get information about a device table into a MySQL database.
You can delete a device from data base too.

## DeviceRegister.js
This component uses a React features to create a simple form where you can add a new device into a table from a MySQL Database. For that, it interacts with an API whith Axios.

## DeviceDetails.js
This component uses a React HOOKs (useEffect) to interact (using Axios) with an API for get information about a device table into a MySQL database.
You can see a lot of charts and tables with a lot of data gas measurement. And, it has an Tab component form where you can export (PDF and EXCEL modes) a data collection in a specific period of time.
