import { styled } from '@mui/material/styles';
import {Paper,Grid ,Box}from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Pets from '@mui/icons-material/Pets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'
import './CardPet.css'

const Img = styled('img')({
  margin:'1px',
  width:'200px',
  height:'140px',
  borderRadius:"5px",
  padding:'1px'
});

function CardPet({id,image,name,sex,age}) 
{
  const path=`/api/pets/${id}`; 
     return ( 
              <Paper className='containerCardPet'>
                  <Grid>
                      <Typography  variant="h6" component="div"  color="#0f4d71" /* sx={{backgroundColor:"#ffa733" ,borderRadius:5 ,margin:"3px"}} */>
                          {name}  <FontAwesomeIcon icon={faPaw} bounce/> 
                      </Typography>                                 
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}>
                      <Button component={Link} to={path} >
                      <Img alt="IMG" src={image} />
                      </Button>
                  </Grid>
                  <Grid item xs={12} className='containerText' >
                      <Box sx={{width:'100%', display:'flex',flexDirection:'row' ,justifyContent:'space-around',alignItems:'center'}}>
                      <Typography
                          noWrap
                          variant="p" 
                          padding={1}                          
                      >
                          {age}
                      </Typography>
                      <Typography
                          variant="p"
                          padding={1}
                           >
                          {sex}
                      </Typography>
                      </Box>
                  </Grid>
              </Paper>  
  )
}
export default CardPet


