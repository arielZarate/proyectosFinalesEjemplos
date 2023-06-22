import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

//========MUI========
import { styled } from '@mui/material/styles';
import { Box,Grid ,Typography,ButtonBase} from '@mui/material'
import NavBar from '../../common/NavBar/NavBar'

import './Profile.css'
const Profile = () => {
  const { user } = useAuth0();

  console.log(user)

  const Img = styled('img')({
    margin: 0,
    padding:0,
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

  return (
<div>
<NavBar />

    <div className="container">
      <Box
     
      >
        <Typography variant="h5" color="initial" sx={{ color:'#01579b'}} className="title">Tu perfil</Typography>
        <Grid container spacing={{ xs: 1, sm: 2, md: 2 }}  className='containerCard' >
        
          <Grid  item  xs={3} sm={3} md={3} >
            <ButtonBase sx={{ width:300, height: 200 }}>
              <Img alt="complex" src={user.picture}  width='150px' height='180px'/>
            </ButtonBase>
          </Grid>

            {/* <Grid item xs container direction="column" spacing={2}> */}
          <Grid item xs={3} sm={3} md={3} direction='column'>
                <Typography  variant="subtitle1">
                   {user.given_name} {user.family_name}
                </Typography>
                <Typography  variant="subtitle1" sx={{marginLeft:3}}>
                    Email Verificado: {user.email_verified===true?'Si':"No" } 
                </Typography>
             
              </Grid>
         
        
          <Grid item xs={3} sm={3} md={3}>
              <Typography sx={{ cursor: 'pointer' }} variant="subtitle1">
               Email: {user.nickname}
              </Typography>
            </Grid>


          <Grid item xs={3} sm={3} md={3}>
              <Typography variant="subtitle1">
              Nickname: {user.nickname}
              </Typography>
            </Grid>
     
      

        </Grid>
      </Box>
    
    </div>

    </div>
  );
};

export default Profile;