import React ,{ useState, useEffect }from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import { getPets } from "../../Redux/Actions/actions_filter";
import { editPet } from "../../Redux/Actions/actions_pets";
import Button from '@mui/material/Button';
import "./Dashboard.css"

function Table() {
  const dispatch = useDispatch();  
  const pets = useSelector((state) => state.filtres_reducer.pets);
  const [petsStatus, setPetsStatus] = useState({});
  
  const handleChange = (event) => {
    const petId = parseInt(event.target.name);
    const petAdopted = event.target.checked;

    setPetsStatus({
      ...petsStatus,
      [event.target.name]: petAdopted,
    });

    dispatch(
      editPet(petId, {
        id: petId,
        adopted: petAdopted.toString(),
      })
    );
  };
  
  useEffect(() => {
    dispatch(getPets());
  }, [dispatch]);

  useEffect(() => {
    const status = {};

    if (pets) {
      pets.forEach((x) => {
        status[x.id.toString()] = x.adopted;
      });
    }

    setPetsStatus(status);
  }, [pets]); 
  
  return (
    <div className="color">
      <h1>Vista de administrador</h1>
      <Box className="contenedor" component="span" sx={{ p: 1.5, border: '1px solid black', display:"flex" }}>              
        <table>
          <thead>
            <tr>
              <Box component="span" sx={{ p: "1px", borderBottom: '1px solid black', display:"flex" }}>              
                <Stack className="categoria"  p={1} direction="row">            
                  <th className="recuadros">
                    Id:
                  </th>
                  <th className="recuadros">
                    Nombre:
                  </th>                 
                  <th className="recuadros">
                    Estado:
                  </th>          
                </Stack>
              </Box>
            </tr>
          </thead>
          <tbody>
            {pets?.map(
              ({
                id,
                name,
              }) => (
                <tr key={id}>
                  <Box
                    component="span"
                    sx={{
                      p: '10px',
                      borderBottom: '1px dashed black',
                      display: 'flex',
                      width: 700,
                    }}
                  >
                    <Stack className="data" spacing={"auto"} direction="row">            
                      <th className="recuadros">
                        {id}
                      </th>
                      <th className="recuadros">
                        {name}
                      </th>                      
                      <th className="recuadros">                      
                        <Switch
                          name={id.toString()}
                          checked={petsStatus[id.toString()]}
                          onChange={handleChange}
                        />                        
                      </th>       
                    </Stack>
                  </Box>
                </tr>                                                                                                                               
              )
            )}
          </tbody>
        </table>
      </Box>
      <Link to={'/'}>
        <Button  variant="contained">Inicio</Button>
      </Link>
    </div>
  );
};

export default Table;
