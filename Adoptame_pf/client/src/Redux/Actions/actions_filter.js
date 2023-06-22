import {
	GET_PETS,
	FILTER_BY_ANIMAL,
	FILTER_BY_COLOR,
	FILTER_BY_SIZE,
	FILTER_BY_BREED,
	FILTER_BY_IDENT,
} from "../ActionsTypes/actions_types";

import axios from "axios";

import { getToken } from "../../common/Account/Token";

//filtros
export const filterByBreed = (payload) => {
	return async (dispatch) => {
		try {
			dispatch({
				type: FILTER_BY_BREED,
				payload,
			});
		} catch (error) {
			console.log({ message: error.message });
		}
	};
};

//=====================
export const filterByAnimal = (payload) => {
	return async (dispatch) => {
		try {
			dispatch({
				type: FILTER_BY_ANIMAL,
				payload,
			});
		} catch (error) {
			console.log({ message: error.message });
		}
	};
};

export const filterBySize = (payload) => {
	return async (dispatch) => {
		try {
			dispatch({
				type: FILTER_BY_SIZE,
				payload,
			});
		} catch (error) {
			console.log({ message: error.message });
		}
	};
};

export const filterByColor = (payload) => {
	return async (dispatch) => {
		try {
			dispatch({
				type: FILTER_BY_COLOR,
				payload,
			});
		} catch (error) {
			console.log({ message: error.message });
		}
	};
};

export const filterByIdent = (payload) => {
	return async (dispatch) => {
		try {
			dispatch({
				type: FILTER_BY_IDENT,
				payload,
			});
		} catch (error) {
			console.log({ message: error.message });
		}
	};
};

export const getPets = () => {
	return async function (dispatch) {
		try {
			/*  const token= getToken();
      const headers = {
       Authorization: `Bearer ${token}`
      }; */
			let response = await axios.get("/api/pets");

			//let pets = response.data?.map((p) => ({ ...p, status: true }));
			//console.log('se envio el token correctamente al back')

			dispatch({
				type: GET_PETS,
				payload: response.data,
			});
		} catch (error) {
			console.error(error.message);
		}
	};
};
