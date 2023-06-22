import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPets } from "../../Redux/Actions/actions_filter";
import CardPet from "../Card/CardPet";
//import {pets} from '../../Datos.js'
import "./Pets.module.css";
//===============
import Paginate from "../Paginate/Paginate.jsx";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function Pets() {
     const dispatch = useDispatch();  
  const pets = useSelector((state) => state.filtres_reducer.pets);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPage] = useState(8);
     useEffect(() => {
    dispatch(getPets());
  }, [dispatch]);  

  const lastPostIndex = currentPage * postPage;
  const firstPostIndex = lastPostIndex - postPage;
  var totalPages = Math.ceil(pets.length / postPage);

  function pagination() {
    return pets.slice(firstPostIndex, lastPostIndex);
  }

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  return (
    <div className="styleContainer">
      <Box sx={{ flexGrow: 1, marginTop: "7rem" }}>
        <Grid container spacing={1}>
          <Grid container item spacing={2}>
            {pets &&
              pagination().map((p) => {
                return (
                  <CardPet
                    key={p.id}
                    id={p.id}
                    image={p.image}
                    name={p.name}
                    edad={p.edad}
                    sexo={p.sexo}
                    description={p.description}
                  />
                );
              })}
          </Grid>
        </Grid>
      </Box>
      <Box container sx={{ flexGrow: 1, marginTop: 10 }}>
        <Paginate
          totalPost={pets.length}
          postPerPage={postPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Box>
    </div>
  );
}

export default Pets;
