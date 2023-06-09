import { TabContext, TabList, TabPanel } from '@mui/lab'
import {  Autocomplete, Card, CardContent, IconButton, Tab, TableFooter, TablePagination, TextField } from '@mui/material'
import Button from '@mui/material/Button';
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import SearchIcon from '@mui/icons-material/Search';
import { ExcelRenderer } from 'react-excel-renderer';
import Navbar from '../components/Navbar/Navbar';


export default function Settings() {
    const [value, setValue] = React.useState('1');
    const [value1, setValue1] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      const handleChange1 = (event, newValue) => {
        setValue1(newValue);
      }
      const [text, setText] = React.useState('');
      const options = ['Option 1', 'Option 2', 'Option 3'];

      
    
      const handleChangeText = (event) => {
        setText(event.target.value);
      };
      const [rows, setRows] = React.useState(['gmail.com', 'hummingbird.com']);
      const [adminrows, setadminRows] = React.useState(['Ram','kumar']);
      const [departmentrows, setdepartmentRows] = React.useState(['Finanace','HR']);

    
    
      const handleTextChange = (index, value) => {
        // Update the value of a specific row
        const updatedRows = [...rows];
        updatedRows[index] = value;
        setRows(updatedRows);
      };
    
      const handleDeleteRow = (index) => {
        // Delete a specific row
        const updatedRows = [...rows];
        updatedRows.splice(index, 1);
        setRows(updatedRows);
      };

      const handleTextChangeAdmin = (index, value) => {
        const updatedRows = [...rows];
        updatedRows[index] = value;
        setRows(updatedRows);
      };
      const handleTextChangedepartment = (index, value) => {
        const updatedRows = [...departmentrows];
        updatedRows[index] = value;
        setdepartmentRows(updatedRows);
      };
      const handleAddRow = () => {
        setRows([...rows,'']);
      };
      const handleAdminAddRow = () => {
        setadminRows([...adminrows, '']);
      };

      const handleDepartmentAddRow = () => {
        setdepartmentRows([...departmentrows, '']);
      };
    

      const handleAdminDeleteRow = (index) => {
        const updatedRows = [...adminrows];
        updatedRows.splice(index, 1);
        setadminRows(updatedRows);
      };

      const handleDepartmentDeleteRow = (index) => {
        const updatedRows = [...departmentrows];
        updatedRows.splice(index, 1);
        setdepartmentRows(updatedRows);
      };
    
     
      const [page, setPage] = React.useState(0);
      const [rowsPerPage, setRowsPerPage] = React.useState(5);
    
      const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };
    
      const employees = [
        {
          id: 1,
          details: 'Employee 1 details',
          designation: 'Designation 1',
          travelPolicy: 'Travel policy 1',
          manager: 'Manager 1',
          actions: 'Actions 1',
        },
        // Add more employees here
      ];
    
      const emptyRows =
        rowsPerPage - Math.min(rowsPerPage, employees.length - page * rowsPerPage);



        const handleFileUpload = (event) => {
          const fileObj = event.target.files[0];
          ExcelRenderer(fileObj, (err, response) => {
            if (err) {
              console.log(err);
            } else {
              const { rows, cols } = response;
              console.log(rows); // Array of rows from the Excel file
              console.log(cols); // Array of columns from the Excel file
              setadminRows(rows.length===0)
            }
          });
        };
        
  return (
    <>
    <Navbar/>
   
    <div className='container d-flex innercontainer'>
        <TabContext value={value}>
    <TabList
      onChange={handleChange}
      aria-label="lab API tabs example"
      orientation="vertical"
      
    >
      {/* <Card> */}
        {/* <CardContent> */}
<Tab label="GENERAL SETTINGS" className='tablist' value="1" />
      <Tab label="Users" className='tablist' value="2" />
      <Tab label="Manage GST" className='tablist' value="3" />
        {/* </CardContent> */}
      {/* </Card> */}
      
    </TabList>
    <div>
      <TabPanel value="1" className='ps-5' >
        <h5>GENERAL SETTINGS</h5>
        <Card className='mt-3'>
            <CardContent>
        <Card className='mt-2'>
            
            <CardContent>
            <h5>Whitelisted email domains</h5> 
            <p>Email IDs with whitelisted official domains allowed for platform login</p>
            <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Email Domains</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                <TextField
                  value={row}
                  onChange={(e) => handleTextChange(index, e.target.value)}
                  variant="outlined"
                  fullWidth
                />
              </TableCell>
              <TableCell>
                <IconButton onClick={() => handleDeleteRow(index)}>
                  <DeleteIcon className="delete-icon" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      <Button className='btnbg mt-2'  variant="contained" onClick={handleAddRow}>
        Add 
      </Button>
        </CardContent>
                
        </Card>
        <Card className='mt-2' >
            <CardContent>
            <h5>Admin</h5> 
            <p>Email IDs with whitelisted official domains allowed for platform login</p>
            <TableContainer component={Paper}>
        <Table>
        <TableHead>
          <TableRow>
            <TableCell>Admins</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
          <TableBody>
            {adminrows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <TextField
                    value={row}
                    onChange={(e) => handleTextChangeAdmin(index, e.target.value)}
                    variant="outlined"
                    sx={{ width: '100%' }}
                  />
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleAdminDeleteRow(index)}>
                  <DeleteIcon className="delete-icon" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button className='btnbg mt-2' variant="contained" onClick={handleAdminAddRow}>
        Add
      </Button>
      <input type="file" onChange={handleFileUpload} />
      

        </CardContent>
                
        </Card>
        <Card className='mt-2'>
            <CardContent>
            <h5>Department</h5> 
            <p>Enter list of designations in your organization</p>
            <TableContainer component={Paper}>
        <Table>
        <TableHead>
          <TableRow>
            <TableCell>Departments</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
          <TableBody>
            {departmentrows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <TextField
                    value={row}
                    onChange={(e) => handleTextChangedepartment(index, e.target.value)}
                    variant="outlined"
                    sx={{ width: '100%' }}
                  />
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleDepartmentDeleteRow(index)}>
                  <DeleteIcon className="delete-icon" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button className='btnbg mt-2' variant="contained" onClick={handleDepartmentAddRow}>
        Add
      </Button>

      

        </CardContent>
                
        </Card>
        </CardContent>
        </Card>
      </TabPanel>
      <TabPanel value="2">
        <h5 className=''>USERS</h5>
        <Card className='mt-3'>
            <CardContent >
            <TabContext value={value1}>

<TabList
  onChange={handleChange1}
  aria-label="lab API tabs example"
>

  <Tab label="Onboarded" value="1" />
  <Tab label="In Queue" value="2" />
  <Tab label="Invited" value="3" />

 
  
</TabList>
    <TabPanel value="1" className='ps-5' >
      <div className='row'>
        <div className='col-6 pb-4'>
    <Autocomplete
        freeSolo
        options={options}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            variant="outlined"
            placeholder='Search by Employee name,official email ID'
            size="small"
            InputProps={{
              ...params.InputProps,
              endAdornment: <SearchIcon />,
            }}
          />
        )}
      />
      </div>
      <div className='col-4 pb-4'>
    <Autocomplete
        freeSolo
        options={options}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            variant="outlined"
            size="small"
            placeholder='Select Department'
            InputProps={{
              ...params.InputProps,
              endAdornment: <SearchIcon />,
            }}
          />
        )}
      />
      </div>
      </div>
      <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Employee details</TableCell>
            <TableCell>Designation</TableCell>
            <TableCell>Travel policy</TableCell>
            <TableCell>Manager</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Display the employees based on the current page and rowsPerPage */}
          {(rowsPerPage > 0
            ? employees.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : employees
          ).map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>{employee.details}</TableCell>
              <TableCell>{employee.designation}</TableCell>
              <TableCell>{employee.travelPolicy}</TableCell>
              <TableCell>{employee.manager}</TableCell>
              <TableCell>{employee.actions}</TableCell>
            </TableRow>
          ))}

          {/* Render empty rows if needed */}
          {emptyRows > 0 && (
            <TableRow style={{ height: 23 * emptyRows }}>
              <TableCell colSpan={5} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              colSpan={5}
              count={employees.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>

    </TabPanel>
    <TabPanel value="2" className='ps-5 '  >
        <h5>In Queue</h5>
      
        
    </TabPanel>
    <TabPanel value="3" className='ps-5 ' >
        <h5>In Queue</h5>
    </TabPanel>
</TabContext>

            </CardContent>
        </Card>
      </TabPanel>
      <TabPanel value="3">Manage GST</TabPanel>
    </div>
  
</TabContext>

      
    </div>
    </>
  )
}
