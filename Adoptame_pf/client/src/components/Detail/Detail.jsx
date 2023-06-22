import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails, clearDetails } from "../../Redux/Actions/actions_pets";
import { styled } from "@mui/material/styles";
import { Card, Grid, Box } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import NavBar from "../../common/NavBar/NavBar";
import "../Detail/Detail.css";

const Img = styled("img")({
  margin: "1px",
  width: "200px",
  height: "140px",
  borderRadius: "5px",
  padding: "1px",
});

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.pets_reducer.detail);

  useEffect(() => {
    dispatch(clearDetails());
    dispatch(getDetails(id));
  }, [id]);

  return (
    <div>
      <NavBar />
      <div>
        <Box className="containerDetail">
          <Box sx={{ display: "flex" }}>
            <Grid container>
              <Grid container item xs={5} md={100}>
                {!detail ? (
                    <Button variant="contained">CARGANDO!</Button>
                ) : (
                  <Card>
                    <CardContent>
                      <Img alt="pet" src={detail?.image} />
                      <Typography paragraph>Nombre: {detail?.name}</Typography>
                      <Typography paragraph>Descripcion: {detail?.description}</Typography>
                      <Typography paragraph>Raza: {detail?.breed}</Typography>
                      <Typography paragraph>Altura: {detail?.height}</Typography>
                      <Typography paragraph>Edad: {detail?.age}</Typography>
                      <Typography paragraph>Sexo: {detail?.sex}</Typography>
                      <Typography paragraph>Animal: {detail?.animal}</Typography>
                      <Stack spacing={2} direction="row">
                        <Link to={"/home"}>
                          <Button variant="contained">Volver</Button>
                        </Link>
                        <Link to={`/Adopta/${id}`}>
                          <Button variant="contained">Adoptame</Button>
                        </Link>
                      </Stack>
                    </CardContent>
                  </Card>
                )}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </div>
  );
}