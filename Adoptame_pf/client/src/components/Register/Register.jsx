import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  Box
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUser } from "../../Redux/Actions/actions_user"
import * as yup from "yup";
import "./Register.css"
import NavBar from '../../common/NavBar/NavBar'

const schema = yup.object().shape({
  fullname: yup
    .string()
    .required("El nombre no puede estar vacio")
    .min(3, "Minimo 3 caracteres")
    .max(30, "Maximo 30 caracteres"),
  address: yup
    .string()
    .required('La dirección es obligatoria')
    .min(3, 'La dirección debe tener al menos 3 caracteres')
    .max(30, 'La dirección no debe tener más de 30 caracteres'),
  email: yup
    .string()
    .required('El email es obligatorio')
    .email('El email no es válido'),
});


function Register() {
  const {
    register,
    formState: { errors },
  } = useForm({ mode: "onTouched", resolver: yupResolver(schema) });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    fullname: "",
    address: "",
    email: "",
    phone: "",
    pet: "",
    location: "",
  });
  const [pet, setPet] = useState([]);
  const [location, setLocation] = useState([]);
  const enviarDatos = (e) => {
    console.log(input);
    e.preventDefault();
    dispatch(createUser(input));
    navigate("/");
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handlerSelectLocation = (e) => {
    console.log(e.target.value);
    setInput({
      ...input,
      location: e.target.value,
    });
  };

  const handlerSelectPet = (e) => {
    console.log(e.target.value);
    setInput({
      ...input,
      pet: e.target.value,
    });
  };
  useEffect(() => {
    axios
      .get("api/pets")
      .then((response) => {
        setPet(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get("api/locations")
      .then((response) => {
        setLocation(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
       <NavBar />
    <form onSubmit={(e) => enviarDatos(e)} className="form">
      <Typography variant="h6" component="h1" 
        sx={{ 
          display: "flex",
          marginTop: "5em",
          padding:"10px",
          textDecoration: "none",
          justifyContent: "center",
          alignItems: "center",
          width:"250px",
          backgroundColor: "rgba(200, 200, 200, 0.4)",
          }}>
            Registrar usuario
      </Typography>
      <Box sx={{
        display: "flex-column",
        flexDirection: "column",
        alignItems: "center",
      }}>

<Box sx={{
  display:"inline-flex",
  justifyContent: "center",
  flexDirection:"row",
  marginLeft: "-20rem"
  }}>
<TextField
      sx={{
        margin: "20px 0",
        width: "350px",
        height:"45px",
        marginRight:"11px",
      }}
      {...register("fullname")}
      error={!!errors.fullname}
      helperText={errors?.fullname?.message}
        id="outlined-basic"
        name="fullname"
        label="Nombre"
        type="text"
        variant="outlined"
        value={input.fullname}
        onChange={(e) => handleChange(e)}
      />
      <TextField
      sx={{
        margin: "20px 0",
        marginRight:"11px",
        width: "350px",
        height:"45px"
      }}
        {...register("email")}
        error={!!errors.email}
        helperText={errors?.email?.message}
        id="email-input"
        name="email"
        label="Email"
        variant="outlined"
        type="email"
        value={input.email}
        onChange={(e) => handleChange(e)}
      />
      <TextField
      sx={{
        margin: "20px 0",
        marginRight:"11px",
        width: "350px",
        height:"45px"
      }}
        id="phone-input"
        name="phone"
        label="Numero de telefono"
        variant="outlined"
        type="number"
        value={input.phone}
        onChange={(e) => handleChange(e)}
      />
</Box>
<Box sx={{
  display:"inline-flex",
  justifyContent: "center",
  flexDirection:"row",
  marginLeft: "-20rem"
  }}>
<TextField
      sx={{
        margin: "20px 0",
        marginRight:"11px",
        width: "350px",
        height:"45px"
      }}
      {...register("address")}
      error={!!errors.address}
      helperText={errors?.address?.message}
        id="description-input"
        name="address"
        label="Direccion"
        variant="outlined"
        value={input.address}
        onChange={(e) => handleChange(e)}
      />
      <FormControl sx={{
        margin: "20px 0",
        marginRight:"11px",
        width: "350px",
        height:"45px"
      }}>
        <InputLabel id="location-select-label">Lugares</InputLabel>
        <Select
              labelId="location-select-label"
              id="location-select"
              type="text"
              name="location"
              value={input.location}
              label="Ciudad"
              onChange={(e) => handlerSelectLocation(e)}
            >
              {location.map((e) => {
                return <MenuItem key={e.id} value={e.id}>{e.province}</MenuItem>;
              })}
            </Select>
      </FormControl>

      {/* <FormControl sx={{
        margin: "20px 0",
        marginRight:"11px",
        width: "350px",
        height:"45px"
      }}>
        <InputLabel id="pet-select-label">Mascota</InputLabel>
        <Select
          id="pet-input"
          name="pet"
          label="Mascota"
          variant="outlined"
          type="number"
          value={input.pet}
          onChange={(e) => handlerSelectPet(e)}
        >
          {pet.map((p) => (
            <MenuItem key={p.id} value={p.id}>
              {p.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl> */}
</Box>
      <Button type="submit" variant="contained" color="primary" className="button" sx={{ marginTop: "15px"}} >
        Crear Usuario
      </Button>
      </Box>

    </form>
    
    </div>
  );
}

export default Register;
