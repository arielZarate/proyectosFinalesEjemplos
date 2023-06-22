import React, {useState, useEffect } from 'react'
import { Link, useParams, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { getDetails, clearDetails, adoptPet } from "../../Redux/Actions/actions_pets";
import { styled } from "@mui/material/styles";
import { Card, Grid, Box } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import NavBar from '../../common/NavBar/NavBar'
import './Adopta.css'

/* api/adoption
{
"idU":1,
  "idP":2
] */

const Img = styled("img")({
	margin: "1px",
	width: "200px",
	height: "140px",
	borderRadius: "5px",
	padding: "1px",
  });

const Adopta = () => {
	const { id } = useParams();
	const { user } = useAuth0();
	const dispatch = useDispatch();
	const detail = useSelector((state) => state.pets_reducer.detail);
	const navigate = useNavigate();
	
	useEffect(() => {
	  dispatch(clearDetails());
	  dispatch(getDetails(id));
	}, [id]);

	const handleSubmit = (event) => {
		dispatch(
			adoptPet(id, user.email)
		  );
		  navigate('/')
	}

	return (
		<div>
			<NavBar />		
				{!detail ? (
                    <Button variant="contained">CARGANDO!</Button>
                ) : (
			<div className='formulario'>
				<h1>Formulario de adopcion</h1> 
				<p>Desea adoptar a este animal?</p>
                  <Card>
                    <CardContent>
                      <Img alt="pet" src={detail?.image} />
                      <Typography paragraph>Nombre: {detail?.name}</Typography>
                      	<div className='botonesAdopcion'>
							<Stack  spacing={2} display="block" direction="row">						
									<Button onClick={handleSubmit} variant="contained">Adoptar</Button>						
								<Link to={"/"}>
									<Button variant="contained">Mejor no</Button>
								</Link>
							</Stack>
						</div>
                      
                    </CardContent>
                  </Card>
			</div>		
                )}
		</div>
      );
    }
    export default Adopta;

/* <div className="container">
			<Formik
				initialValues={{
					nombre: '',
					nombre2: '',
          			calle: '',
          			altura: '',
          			telefono: ''
				}}
				validate={(valores) => {
					let errores = {};		

					if(!valores.nombre){
						errores.nombre = 'Por favor ingresa el nombre del perro a adoptar'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
						errores.nombre = 'El nombre solo puede contener letras, espacios y no mas de 40 caracteres'
					}
          if(!valores.nombre2){
						errores.nombre2 = 'Por favor ingresa su nombre'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre2)){
						errores.nombre2 = 'El nombre solo puede contener letras, espacios y no mas de 40 caracteres'
					}			
          if(!valores.calle){
						errores.calle = 'Por favor ingresa su calle'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.calle)){
						errores.calle = 'El nombre solo puede contener letras, espacios y no mas de 40 caracteres'
					}			
          if(!valores.altura){
						errores.altura = 'Por favor ingresa la altura de su vivienda'
					} else if(!/^(0.|[1-9]|[1-9][0-9]{1,3}|[1-4][0-9]{3}|5000)$/.test(valores.altura)){
						errores.altura = 'La altura solo puede ser un numero del 1 al 9999.'
					}
          if(!valores.telefono){
						errores.telefono = 'Por favor ingresa un numero de telefono'
					} else if(!/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/.test(valores.telefono)){
						errores.telefono = 'Ingrese su numero de telefono valido'
					}
					return errores;
				}}
				onSubmit={(valores, {resetForm}) => {
					resetForm();
					console.log('Formulario enviado');
					cambiarFormularioEnviado(true);
					setTimeout(() => cambiarFormularioEnviado(false), 5000);
				}}
			>
				{( {errors} ) => (
					<Form className="formulario">   
							<h1>Formulario de adopcion</h1>         
						<div>
							<label htmlFor="nombre">Nombre del perro:</label>
							<Field className="stiloDmerga"
								type="text" 
								id="nombre" 
								name="nombre" 
								placeholder="Ayudante de santa..."
							/>
							<ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
						</div>
            <div>
							<label htmlFor="nombre2">Nombre del adoptante:</label>
							<Field className="stiloDmerga"
								type="text" 
								id="nombre2" 
								name="nombre2" 
								placeholder="Homero Simpson..."
							/>
							<ErrorMessage name="nombre2" component={() => (<div className="error">{errors.nombre2}</div>)} />
						</div>
            <div>
							<label htmlFor="calle">Nombre de la calle:</label>
							<Field className="stiloDmerga"
								type="text" 
								id="calle" 
								name="calle" 
								placeholder="Cabildo..."
							/>
							<ErrorMessage name="calle" component={() => (<div className="error">{errors.calle}</div>)} />
						</div>	
            <div>
							<label htmlFor="altura">Numero de la vivienda:</label>
							<Field className="stiloDmerga"
								type="text" 
								id="altura" 
								name="altura" 
								placeholder="5879..."
							/>
							<ErrorMessage name="altura" component={() => (<div className="error">{errors.altura}</div>)} />
						</div>	
            <div>
							<label htmlFor="telefono">Numero de telefono:</label>
							<Field className="stiloDmerga"
								type="text" 
								id="telefono" 
								name="telefono" 
								placeholder="99745879..."
							/>
							<ErrorMessage name="telefono" component={() => (<div className="error">{errors.telefono}</div>)} />
						</div>																
						<button type="submit">Enviar</button>
						{formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
					</Form>
				)}
        </Formik>
        </div> */