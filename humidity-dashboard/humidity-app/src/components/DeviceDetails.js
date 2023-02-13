import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Alert, FormControl, InputLabel, NativeSelect } from '@mui/material';

import { TextField } from "@mui/material";

import { useEffect, useState } from "react";

import axios from "axios";

import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable'
import TimeField from 'react-simple-timefield';

import * as XLSX from 'xlsx';
import { set_cptable } from "xlsx";
import * as cptable from 'xlsx/dist/cpexcel.full.mjs';

import Chart from 'react-apexcharts'
set_cptable(cptable);




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function DeviceDetails(props) {
  const [value, setValue] = React.useState(0);
  const [rows, setRows] = React.useState([])
  // const [selectedRows, setSelectedRows] = React.useState([])
  const [exportFileType, setExportFileType] = useState('')
  const [date1, setDate1] = useState('')
  const [date2, setDate2] = useState('')
  const [hora1, setHora1] = useState('')
  const [hora2, setHora2] = useState('')

  useEffect(() => {
    let URL = "http://localhost:3080/get-log/device/" + props.device[0].id
    try {
      axios.get(URL).then(
        res => {
          setRows(res.data.response)
        }
      )
    } catch (e) {
      alert(e)
    }
  }, [])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function exportData() {
      let dateTime1 = String(date1) + " " + String(hora1) + ":00"
      let dateTime2 = String(date2) + " " + String(hora2) + ":00"
      console.log("date1: ", dateTime1)
      console.log("hora1: ", dateTime2)
      console.log("id: ", props.device[0].id)
      let URL = "http://localhost:3080/get-log/device/period/" + props.device[0].id + "/" + dateTime1 + "/" + dateTime2
      console.log(URL)
      try {
        axios.get(URL).then(
          res => {
            // setSelectedRows(res.data.response)
            if (exportFileType === '1') {
              console.log("PDF")
              const doc = new jsPDF();
        
              let BODY = [[]]
        
              res.data.response?.map((row, idx) =>
                BODY.push([row.serialNumber, row.alarme === 1 ? "Sem alarme" : "Em alarme", row.variableValue, row.timeStamp])
              )
              console.log(BODY)
        
              autoTable(doc, {
                head: [['Serial do Equipamento', 'Alarme', 'Leitura', 'Data e hora']],
                body:
                  BODY,
              })
              doc.save("pdf_name.pdf");
        
            } else if (exportFileType === '2') {
              console.log("Excel")
              let BODY = []
        
              res.data.response?.map((row, idx) =>
                BODY.push({"Serial": row.serialNumber, "Estado": row.alarme === 1 ? "Sem alarme" : "Em alarme", "Leitura": row.variableValue, "Data e Hora": row.timeStamp})
              )
              console.log(BODY)
              const worksheet = XLSX.utils.json_to_sheet(BODY);
              const workbook = XLSX.utils.book_new();
              XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
              XLSX.writeFile(workbook, "Data.xlsx", { compression: true });
            }
          }
        )
      } catch (e) {
        alert(e)
      }
  }

  let dtRows = []
  let dataRows = []
  rows.map((row, idx) => (
    
    dtRows.push(row.timeStamp)
  ))
  rows.map((row, idx) => (
    
    dataRows.push(row.variableValue)
  ))
  console.log(dtRows)
  console.log(dataRows)

  const chart = {
    options: {
      chart: {
        id: 'apexchart-example'
      },
      xaxis: {
        categories: dtRows.reverse()
      }
    },
    stroke: {
      curve: 'straight',
    },
    series: [{
      name: 'Temperatura',
      data: dataRows.reverse()
    }]
  }


  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Mácro Análises" {...a11yProps(0)} />
          <Tab label="Histórico de operação" {...a11yProps(1)} />
          <Tab label="Exportar relatório técnico" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {
          rows[0]?.alarme === 1 ? <Alert severity="success">Sem alarme</Alert> : <Alert severity="error">Em alarme</Alert>
        }
        <div>
        <Chart options={chart.options} series={chart.series} type="area" width={900} height={420} />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant="h8" color="text.secondary">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650, backgroundColor: '#1f2969' }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{ backgroundColor: '#6d7ad1' }}>
                  <TableCell>FK_Sistema</TableCell>
                  <TableCell align="right">Serial do Equipamento</TableCell>
                  <TableCell align="right">Alarme</TableCell>
                  <TableCell align="right">Valor medido de Umidade</TableCell>
                  <TableCell align="right">Data e Hora</TableCell>
                </TableRow>
              </TableHead>
              {
                rows.map((row, idx) => (
                  <TableBody>
                    <TableRow
                      key={idx}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.fk_sistema}
                      </TableCell>
                      <TableCell align="right">{row.serialNumber}</TableCell>
                      <TableCell align="right">{row.alarme}</TableCell>
                      <TableCell align="right">{row.variableValue}</TableCell>
                      <TableCell align="right">{row.timeStamp}</TableCell>
                    </TableRow>
                  </TableBody>
                ))
              }
            </Table>
          </TableContainer>

        </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>

        <Card>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '60%', marginTop: '14px' }}>
                <TextField value={date1} onChange={(e) => setDate1(e.target.value)} type='date' fullWidth id="outlined-basic" label="" variant="outlined" />
              </div>
              <div style={{ width: '60%', marginTop: '14px' }}>

                <TimeField style={{ width: '20%', marginTop: '14px' }} fullWidth value={hora1} onChange={(e) => setHora1(e.target.value)} />

              </div>

              <div style={{ width: '60%', marginTop: '14px' }}>
                <TextField value={date2} onChange={(e) => setDate2(e.target.value)} type='date' fullWidth id="outlined-basic" label="" variant="outlined" />
              </div>

              <div style={{ width: '60%', marginTop: '14px' }}>

                <TimeField style={{ width: '20%', marginTop: '14px' }} fullWidth value={hora2} onChange={(e) => setHora2(e.target.value)} />

              </div>

              <FormControl fullWidth sx={{ width: '20%', marginTop: '14px' }}>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Tipo do arquivo
                </InputLabel>
                <NativeSelect
                  defaultValue={exportFileType}
                  inputProps={{
                    name: 'fileType',
                    id: 'uncontrolled-native',
                  }}
                  onChange={(e) => setExportFileType(e.target.value)}
                >
                  <option value={0} desabled>Selecione</option>
                  <option value={1}>PDF</option>
                  <option value={2}>EXCEL</option>
                </NativeSelect>
              </FormControl>

              <div style={{ width: '60%', display: 'flex', marginTop: '14px', justifyContent: 'right' }}>
                <Button onClick={() => { exportData() }} variant="contained">Exportar dados</Button>
              </div>

            </div>

          </CardContent>
        </Card>
      </TabPanel>
    </Box>
  );
}