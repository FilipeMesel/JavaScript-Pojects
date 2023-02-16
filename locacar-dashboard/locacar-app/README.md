# Getting Started with Create React App

Front end project from a simple Car Location Service System. If you want to run this code, just clone this git repository and type in command line:

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

 - LocationList.js: Java Script file that's represents a list of locations registered by user.
 - locationRegister.js: Java Script file that's represents a new locations registration.
 - ClientsList.js: Java Script file that's represents a list of clients registered by user.
 - ClientsRegister.js: Java Script file that's represents a new client registration.
 - EntittyList.js: Java Script file that's where you can see more information about a single Entitty.
 - EntittyRegister.js: Java Script file that's represents a new Entitty registration.
 - Menu.js: Java Script file that's represents a Menu bar for navegation.

## LocationList.js
This component uses a React HOOKs (useEffect) to interact (using Axios) with an API for get information about a company table into a MySQL database.
You can delete a Location from data base too.

## LocationRegister.js
This component uses a React features to create a simple form where you can add a new location into a table from a MySQL Database. For that, it interacts with an API whith Axios. You can't do a new registration with same enttity, start date and end date.

## EntittyList.js
This component uses a React HOOKs (useEffect) to interact (using Axios) with an API for get information about a enttity table into a MySQL database.
You can delete a entitty from data base too. It will delete all locations joined with this entitty.

## EntittyRegister.js
This component uses a React features to create a simple form where you can add a new entitty into a table from a MySQL Database. For that, it interacts with an API whith Axios.

## ClientsList.js
This component uses a React HOOKs (useEffect) to interact (using Axios) with an API for get information about a clients table into a MySQL database.
You can delete a client from data base too.

## ClientsRegister.js
This component uses a React features to create a simple form where you can add a new client into a table from a MySQL Database. For that, it interacts with an API whith Axios.
