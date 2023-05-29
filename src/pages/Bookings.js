import React, { useEffect } from 'react';
import { Card, CardContent, Container, Grid, Tab, Tabs, TextField, InputAdornment, Typography, useMediaQuery, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SearchIcon from '@mui/icons-material/Search';

export default function Bookings() {
  const [value, setValue] = React.useState('1');
  const [searchTerm, setSearchTerm] = React.useState('');
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const columns = [
    { field: 'BOOKING ID', headerName: 'BOOKING ID', width: 150 },
    { field: 'TRAVELER(S)', headerName: 'TRAVELLER(S)', width: 150 },
    { field: 'CHECK-IN', headerName: 'CHECK-IN', width: 150 },
    { field: 'CHECK-OUT', headerName: 'CHECK-OUT', width: 150 },
    { field: 'DESTINATION', headerName: 'DESTINATION', width: 150 },
    { field: 'INVOICE', headerName: 'INVOICE', width: 150 }
  ];

  const rows = [
    { id: 1, 'BOOKING ID': 1, 'TRAVELER(S)': 'John Doe', 'CHECK-IN': '2023-06-01', 'CHECK-OUT': '2023-06-07', 'DESTINATION': 'Paris', 'INVOICE': '$500' },
    { id: 2, 'BOOKING ID': 2, 'TRAVELER(S)': 'Jane Smith', 'CHECK-IN': '2023-06-08', 'CHECK-OUT': '2023-06-15', 'DESTINATION': 'London', 'INVOICE': '$700' },
    { id: 3, 'BOOKING ID': 3, 'TRAVELER(S)': 'Mike Johnson', 'CHECK-IN': '2023-06-16', 'CHECK-OUT': '2023-06-23', 'DESTINATION': 'New York', 'INVOICE': '$900' },
    { id: 4, 'BOOKING ID': 4, 'TRAVELER(S)': 'Sarah Thompson', 'CHECK-IN': '2023-06-24', 'CHECK-OUT': '2023-06-30', 'DESTINATION': 'Tokyo', 'INVOICE': '$1200' },
    { id: 5, 'BOOKING ID': 5, 'TRAVELER(S)': 'David Wilson', 'CHECK-IN': '2023-07-01', 'CHECK-OUT': '2023-07-07', 'DESTINATION': 'Sydney', 'INVOICE': '$800' }
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRows = searchTerm
    ? rows.filter((row) => row['TRAVELER(S)'].toLowerCase().includes(searchTerm.toLowerCase()))
    : rows;

  const tabStyles = {
    minWidth: isMobile ? 'auto' : 100,
    '&:hover': {
      backgroundColor: '#7862dc',
      color: '#fff'
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }} >
      <Container maxWidth="md" className='mb-4 ' sx={{paddingTop:"80px"}}>
        <Card className='mt-2 '  style={{ boxShadow: 'rgb(207 202 202) 0px 0px 10px', border: '1px solid #1976d2' }}>
          <CardContent>
            <Typography>
              <p className='mt-4 fw-bold'>BOOKINGS</p>
            </Typography>

            <Card className='mt-4'>
              <CardContent>
              <TextField
        label="Search Travel-id or Booking-id"
        value={searchTerm}
        onChange={handleSearchChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        style={{ marginRight: '500px',width: isMobile ? '100%' : '50%' }}
      />
        <TabContext value={value}>
                  <TabList
                    onChange={handleChange}
                    variant={isMobile ? "fullWidth" : "scrollable"}
                    scrollButtons={isMobile ? "off" : "auto"}
                    aria-label="Tab List"
                    indicatorColor="#7862dc"
                    textColor="red"
                    sx={{ borderBottom: 1, borderColor: 'divider' }}
                  >
                    <Tab id="tab-id" label="OnGoing" value="1" sx={tabStyles} />
                    <Tab label="Upcoming" value="2" sx={tabStyles} />
                    <Tab className='tab-y' label="Past" value="3" sx={tabStyles} />
                  </TabList>
                  <TabPanel value="1">
  <div style={{ height: 300, width: '100%' }}>
    <DataGrid
      rows={filteredRows}
      columns={columns}
      pageSize={5} // Specify the desired number of rows per page
      pagination
    />
  </div>
</TabPanel>
<TabPanel value="2">
  <div style={{ height: 300, width: '100%' }}>
    <DataGrid
      rows={filteredRows}
      columns={columns}
      pageSize={5} // Specify the desired number of rows per page
      pagination
    />
  </div>
</TabPanel>
<TabPanel value="3">
  <div style={{ height: 300, width: '100%' }}>
    <DataGrid
      rows={filteredRows}
      columns={columns}
      pageSize={5} // Specify the desired number of rows per page
      pagination
    />
  </div>
</TabPanel>
          </TabContext>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
