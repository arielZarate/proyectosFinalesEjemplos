import FormRegister from "./FormRegister/FormRegister";
//import Nav from "./Nav/Nav";
//import WavesLogin from "../Waves/WavesLogin/WavesLogin";
// import spin from "../assets/spin.png";
//import Presentation from "../Assets/img/Presentationlogin-presentation.png";
import { useEffect, useState } from "react";
//import "@fontsource/roboto/300.css";
import { useDispatch, useSelector } from "react-redux";
//import { useForm } from "../../Hooks/useForm";
import { Box, Button } from "@mui/material";
//import { Redirect } from "react-router-dom";
import { setIsLog, setUserName } from "../../Redux/Slices";
import { useForm } from "../../hooks/useForm";

//validaciones deben ir en un tipo middleware
import validationsForm from "../../utils/ValidationForm";

//esto debo verlo no se para que esta 
import Nav from "../LandingPage/nav/Nav";

//importacion del formLogin de la carpeta formLogin
import FormLogin from "./formLogin/FormLogin";

import Loading from "../Loading/Loading";

import { Navigate } from "react-router-dom";

const Login = () => {
  const initialForm = {
    email: "",
    password: "",
    name: "",
    birthday: "",
    lastname: "",
    registerpassword: "",
    verifypassword: "",
    registerEmail: "",
    country: "",
    userName: "",
  };

  const [loginType, setLoginType] = useState("login");
  //const url = window.location.href;

  const mode = useSelector((state) => state.theme.mode);
  const Theme = useSelector((state) => state.theme);


  // useForm viene del hook que tiene todas las acciones
  const {
    form,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleSubmits,
    handleImage,
    image,
    previewUrl,
  } = useForm(initialForm, validationsForm);


  //use dispacth
  const dispatch = useDispatch();

  //useDispatch
  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("token"))); //muestra por consola el token
    //valida eltoken
    if (JSON.parse(localStorage.getItem("token")) !== null) {
      dispatch(setUserName(JSON.parse(localStorage.getItem("token")).userName));
      dispatch(setIsLog(JSON.parse(localStorage.getItem("token")).token));
    }
  });

  //isLog & isLoading  se maneja en el redux
  const { isLog } = useSelector((store) => store.users);
  const isLoading = useSelector((store) => store.isLoading);


  //return
  return (
    <div
      className="Login-container"
      style={{ background: Theme[mode].primary, minHeight: "100vh" }}
    >
      {isLog && <Navigate to="/home" />}
      {isLoading ? (
         <Loading />
        // <Box
        //   display={{ xs: "none", sm: "none", md: "flex" }}
        //   position="absolute"
        //   bottom={"0"}
        //   right="0"
        //   padding={"20px"}
        // >
        //   <img className="spin" src={spin} alt="spin" />
        // </Box>
      ) : (
        <Box minHeight={"100vh"} sx={{ background: Theme[mode].primary }}>
          <Nav setLoginType={setLoginType} />
          <Box display="flex">
            <Box
              sx={{
                height: "calc(100vh - 64px)",
                width: "100%",
                display: "flex",
                flexDirection: "column",

                overflow: "scroll",
              }}
              className="container"
            >
              {loginType === "login" ? (
                <Box display="flex" justifyContent="center" width="100%">
                  <FormLogin
                    form={form}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    handleSubmits={handleSubmits}
                    errors={errors}
                  />
                </Box>
              ) : (
                <Box display="flex" justifyContent="center">
                  <FormRegister
                    form={form}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    handleSubmit={handleSubmit}
                    handleImage={handleImage}
                    image={image}
                    previewUrl={previewUrl}
                    errors={errors}
                  />
                </Box>
              )}
              <Box
                // marginTop={"1rem"}
                display="flex"
                justifyContent="center"
                className="Login-form-links"
              >
                {loginType === "login" ? (
                  <Button
                    variant="text"
                    onClick={() => setLoginType("register")}
                    style={{ color: Theme[mode].textPrimary }}
                  >
                    Registrar
                  </Button>
                ) : (
                  <Button
                    variant="text"
                    onClick={() => setLoginType("login")}
                    style={{ color: Theme[mode].textPrimary }}
                  >
                    Acceder
                  </Button>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </div>
  );
};
export default Login;
