import {
  GET_PETS,
  FILTER_BY_BREED,
  FILTER_BY_ANIMAL,
  FILTER_BY_COLOR,
  FILTER_BY_IDENT,
  FILTER_BY_SIZE,
  SEARCH_BY_NAME
} from "../ActionsTypes/actions_types";
import { pets } from "../../Datos";

const initialState = {
  pets:[] ,
  copia_pets2: [],
};

function filtres_reducer(state = initialState, action) {
  // en esta accion mando todos los videogames al arrglo vacio
  switch (action.type) {
    case GET_PETS:
      return {
        ...state,
        pets: action.payload,
        copia_pets2: action.payload,
      };

    //FILTROS
    case FILTER_BY_BREED:
      state.pets = state.copia_pets2;
      const filter_breed =
        action.payload === "todos"
          ? state.copia_pets2
          : state.pets.filter(
              (e) => e.breed.toLowerCase() === action.payload.toLowerCase()
            );
        return {
          ...state,
          pets: filter_breed,
        };

    case FILTER_BY_ANIMAL:
      /*     const filter_animal = action.payload==='gato'? state.pets.filter( e => e.animal.toLowerCase() = e.action.payload.toLowerCase())
      //console.log(fil_animal); */
      state.pets = state.copia_pets2;
      const filter_animal =
        action.payload === "perro"
          ? state.pets.filter((a) => a.animal === "perro")
          : state.pets.filter((a) => a.animal === "gato");
      return {
        ...state, //me devuelve el estado anterior
        pets: action.payload === "todos" ? state.copia_pets2 : filter_animal,
      };

    case FILTER_BY_SIZE:
      let fil_size = null;
      state.pets = state.copia_pets2;
      if (action.payload === "Grande") {
        fil_size = state.pets.filter((e) => e.height >= 45);
      } else if (action.payload === "Chico") {
        fil_size = state.pets.filter((e) => e.height <= 25);
      } else {
        fil_size = state.pets.filter(
          (e) => e.height > 25 && e.height < 45
        );
      }

      return {
        ...state,
        pets: action.payload === "todos" ? state.copia_pets2 : fil_size,
      };

    case FILTER_BY_COLOR:
      state.pets = state.copia_pets2;
      const filter_color = state.pets.filter(
        (e) => e.color === action.payload
      );
      //if (filter_color.length === 0) {
        return {
          ...state,
          pets: action.payload === "todos" ? state.copia_pets2 : filter_color,
        };
      // } else {
      //   return {
      //     ...state,
      //     pets: filter_color,
      //   };
      // }
    case FILTER_BY_IDENT:
      state.pets = state.copia_pets2;
      const filter_ident =
        action.payload === "Encontra"
          ? state.pets.filter((e) => e.identified)
          : state.pets.filter((e) => !e.identified);

      if (filter_ident === 0) {
        return {
          ...state, //me devuelve el estado anterior
          pets: state.copia_pets2,
        };
      } else {
        return {
          ...state, //me devuelve el estado anterior
          pets: action.payload === "todos" ? state.copia_pets2 : filter_ident,
        };
      }

      //searchBar
      case SEARCH_BY_NAME:
        return{
          ...state,
          pets:action.payload,

        }

    default:
      return state;
  }
}

export default filtres_reducer;
