import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { paymentMp } from "../../Redux/Actions/index";
import style from "./Dona.module.css";
import NavBar from '../../common/NavBar/NavBar'

function Dona() {
  const dispatch = useDispatch();

  const handleClick = async () => {
    const response = await dispatch(paymentMp());

    window.location.href = response.payload;
  };
  return (
    <div>
      <NavBar />
    <div>
      <img
        className={style.img}
        src="https://us.123rf.com/450wm/ayutaka/ayutaka1702/ayutaka170200020/72967164-peque%C3%B1o-grupo-de-perros-y-gato-con-caja-de-donaciones.jpg"
        />
      <button className={style.buttondonar} onClick={handleClick}>
        Hacer una donacion{" "}
      </button>
      <h2 className={style.texto}>
        Cualquier donación hecha será recibida con mucho amor y será destinada a
        mejorar la calidad de vida de los animales. ¡Gracias!
      </h2>
    </div>
        </div>
  );
}

export default Dona;
