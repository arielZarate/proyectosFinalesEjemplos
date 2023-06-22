import { Box, Typography } from "@mui/material";
import React, { useState ,useEffect} from "react";
import {
    filterByBreed,
    filterByAnimal,
    filterBySize,
    filterByColor,
    filterByIdent} from "../../Redux/Actions/actions_filter";
import { tamanio,razas,color } from "../../ArrayDatos/arrayPets";

//===========mui=================
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
//=============================================================
import './Filtres.css'
import { useDispatch } from "react-redux";

export default function Filtres() {

const dispatch=useDispatch();
//==================================================================
  function handlerFilterBreed(e) {
   dispatch(filterByBreed(e.target.value)); 
      }

  function handlerFilterAnimal(e) {
    //console.log(e.target.value)
    dispatch(filterByAnimal(e.target.value));
      }

  function handlerFilterSize(e) {
   dispatch(filterBySize(e.target.value));
   // setCurrentPage(1);
      }

  function handlerFilterColor(e) {
    dispatch(filterByColor(e.target.value));
    //setCurrentPage(1);
      }

  function handlerIdentified(e) {
    dispatch(filterByIdent(e.target.value))
      }

  return (
      <div className="FiltreClass">
          <Typography variant="h5" paddingLeft={5} paddingRight={5} className="color_title">FILTROS</Typography>
          <FormControl sx={{marginTop:1}}>
              <FormLabel id="demo-radio-buttons-group-label"><span className="color_title">Mascota</span></FormLabel>
              <RadioGroup
                  sx={{padding:1}}
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="todos" 
                  name="radio-buttons-group"
                  onChange={handlerIdentified}
              >   
                  <FormControlLabel value="todos" control={<Radio />} label="Todos" />
                  <FormControlLabel value="Encontra" control={<Radio />} label="Encontrado" />
                  <FormControlLabel value="Adopta" control={<Radio />} label="Adopta" />
              </RadioGroup>
          </FormControl>
          <FormControl sx={{width:150}}>
              <InputLabel
                  id="demo-simple-select-label">Raza</InputLabel>
              <Select                
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label='raza'
                  onChange={handlerFilterBreed}
                  defaultValue='todos'
              >
                  {
                    razas.map(name=>{
                      return(
                    <MenuItem key={name}value={name}>{name}</MenuItem>
                      )
                    })
                  }        
              </Select>
          </FormControl>
          <FormControl>
              <FormLabel sx={{padding:2}} id="demo-radio-buttons-group-label"><span className="color_title">Tipo de Animal</span></FormLabel>
              <RadioGroup                
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="todos"
                name="radio-buttons-group"
                onChange={(e)=>handlerFilterAnimal(e)}            
              >
                    <FormControlLabel value="todos" control={<Radio />} label="todos" />
                    <FormControlLabel value="perro" control={<Radio />} label="perro" />
                    <FormControlLabel value="gato" control={<Radio />} label="gato" />              
              </RadioGroup>
          </FormControl>        
          <FormControl sx={{width:150}}>
              <InputLabel id="demo-simple-select-label">Tamaño</InputLabel>
              <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"      
                  label="tamaño"
                  onChange={(e)=>handlerFilterSize(e)}
              >
                {
                  tamanio.map(t=>{
                    return(
                      <MenuItem key={t} value={t}>{t}</MenuItem>
                    )
                  })
                }
              </Select>
            </FormControl>        
            <FormControl sx={{width:150 ,marginTop:1}}>
                <InputLabel id="demo-simple-select-label">Color</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"            
                    label="color"
                    onChange={(e)=>handlerFilterColor(e)}
                >
                  {
                    color.map(c=>{
                      return (
                        <MenuItem key={c}value={c}>{c}</MenuItem>
                      )
                    })
                  }
                </Select>
              </FormControl>      
   
     
    </div>
     
  );
}