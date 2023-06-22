import React from 'react'

 import Pets from '../../components/CardsPets/Pets' 
 import Filtres from '../../components/Filtres/Filtres';

 //=========MUI============
 import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './Home.css'
import { Notify } from '../../components/Notificacion/Notify';
import NavBar from '../../common/NavBar/NavBar'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
    <div>
      <NavBar />
    <div className='containerHome'>
  <Box /* sx={{ flexGrow: 1 }} */ sx={{ width: '100%'  }}  >
      <Grid /*  container spacing={0} */  container rowSpacing={1} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
        <Grid container  item xs={2.5} md={2.5} >
         <Filtres/> 
        </Grid>
          <Grid item xs={9} sm={9} md={9}>
          <Pets/>
        </Grid>
      </Grid>
    </Box> 
       
    </div>
    </div>
  )
}
