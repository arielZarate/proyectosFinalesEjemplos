import React,{useState} from "react";
import styled from "@mui/material/styles/styled";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import {useDispatch } from 'react-redux'
import { getPetsByName} from '../../Redux/Actions/actions_pets'
import {Notify} from '../../components/Notificacion/Notify'
//=============MUI ========================
const SearchContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "15rem",
  height: "2.5rem",
  border: "1px solid #01579b",
  borderRadius: "5px",
  padding: "0.2rem 0.5rem",
}));

const SearchInput = styled(TextField)(({ theme }) => ({
  fontSize: "0.9rem",
  textAlign: "left",
  border: "none",
  "& .MuiInputBase-input": {
    padding: "0.5rem",
    marginLeft: "0.5rem",
  },
}));

const SearchButton = styled(IconButton)(({ theme }) => ({
  padding: "0.8rem",
  color: "#01579b",
  "&:hover": {
    backgroundColor: "#fafafa",
  }
}));



export default function SearchBar() {
  const dispach=useDispatch();
  const [search,setSearch]=useState('');



  const handleOnChange=(e)=>{
    e.preventDefault();
    //console.log(e.target.value)
    setSearch(e.target.value)
  }
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(search);
    // Aquí puedes agregar la lógica para realizar la búsqueda
    if (search == "") {
      Notify('warning', 'Error campo vacio', 'center-end', 2000);
    }
    dispach(getPetsByName(search)) 

    setSearch('');
  };

  return (
    <form onSubmit={(e)=>handleSearch(e)} >
      <SearchContainer>
        <SearchInput
          id="search"
        
          placeholder="buscar" 
          variant="standard"
          InputProps={{
            disableUnderline: true,
            inputProps: {
              dir: "ltr",
            },
          }}
          value={search}
          onChange={(e)=>handleOnChange(e)}

        />
        <SearchButton type="submit" aria-label="search">
          <SearchIcon />
        </SearchButton>
      </SearchContainer>
    </form>
  );
}









/* import React, { useState } from "react";
import { useDispatch } from "react-redux";


export default function SearchBar() {

  const [search, setSearch]=useState("");


  const handleSearchChange = (event) => {
  
   // console.log(event.target.value)
   setSearch(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();

  };

 

  return (
    

    <form onSubmit={(e) => handleSubmit(e)}>
      <div className=''>
        <input className=''
          type='text'
          value={search}
          placeholder='Buscar Juego ...' 
          
          onChange={(e) => handleSearchChange(e)}
        />

        <button className='' type='submit'>Buscar </button>

      </div>
    </form>

  );
}
 */



/* 









 const Search = styled("div")(({ theme }) => ({
    position: "relative",
    border: "1px solid #01579b",
    color: "#01579b",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(5),
    marginLeft: 0,
    width: "100%",
    height: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "50%",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));





   <form onSubmit={handleSearchSubmit}>
      <Search>
        <SearchIconWrapper
          sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
        >
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Buscar Mascota"
           type="text" 
         value = { search }
        onChange = {(e) => handleSearchChange(e)}

/>
      </Search >

    </form >
*/