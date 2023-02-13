# Project Description

This is a simple front end ReactJs project that interact with a NodeJs API to create a Temperature IoT monitoring system with:

1. A initial web page that show you a list of companies:
![JSProjectFrontend12](https://user-images.githubusercontent.com/54197776/218365863-10da99f1-63fb-497a-8baf-ccc72478b7f1.png)


2. Another page that show you a list of devices registered by the company:
![JSProjectFrontend22](https://user-images.githubusercontent.com/54197776/218365908-2dba11e9-9f24-4bc3-95cb-2ef21bd56faf.png)


3. A Device details with some charts and tables:
![JSProjectFrontend32](https://user-images.githubusercontent.com/54197776/218365920-2630b5f3-fdc3-4dca-9bb6-45f1550f440a.png)
![JSProjectFrontend42](https://user-images.githubusercontent.com/54197776/218365930-9121f530-28a0-403b-a762-42295a03c9c3.png)



4. Option to share data in .pdf or .csv format:
![JSProjectFrontend52](https://user-images.githubusercontent.com/54197776/218365941-3ca9492b-1029-4237-8711-03b8314b0fbd.png)



# Getting Started with Create React App

Front end project from a simple IoT Temperature monitoring System. If you want to run this code, just clone this git repository and type in command line:

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
You can see a lot of charts and tables with a lot of data temperature measurement. And, it has an Tab component form where you can export (PDF and EXCEL modes) a data collection in a specific period of time.
