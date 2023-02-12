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
