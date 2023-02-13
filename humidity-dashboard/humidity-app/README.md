# Project Description

This is a simple front end ReactJs project that interact with a NodeJs API to create a Humidity IoT monitoring system with:

1. A initial web page that show you a list of companies:
![JSProjectFrontend13](https://user-images.githubusercontent.com/54197776/218370186-590dcd36-e421-4ea8-a9db-f0d3dd5df93c.png)



2. Another page that show you a list of devices registered by the company:
![JSProjectFrontend23](https://user-images.githubusercontent.com/54197776/218370211-3ec88c53-d129-4f37-9d73-6ae5d8ad789c.png)



3. A Device details with some charts and tables:
![JSProjectFrontend33](https://user-images.githubusercontent.com/54197776/218370227-f4ca34e9-eda0-44ee-85fb-65ee44c51130.png)
![JSProjectFrontend43](https://user-images.githubusercontent.com/54197776/218370237-86143f10-6372-4d66-9335-8bb24009f26c.png)




4. Option to share data in .pdf or .csv format:
![JSProjectFrontend53](https://user-images.githubusercontent.com/54197776/218370252-1e7f68d8-6831-4cd7-b18f-a3bb57d1bd55.png)




# Getting Started with Create React App

Front end project from a simple IoT Humidity monitoring System. If you want to run this code, just clone this git repository and type in command line:

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
You can see a lot of charts and tables with a lot of data humidity measurement. And, it has an Tab component form where you can export (PDF and EXCEL modes) a data collection in a specific period of time.
