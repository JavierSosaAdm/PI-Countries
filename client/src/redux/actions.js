import axios from "axios";

import {
    GET_COUNTRY, 
    FILTER_POR_CONTINENTE, 
    GET_PAIS_NOMBRE, 
    GET_PAIS_ID, 
    GET_ACTIVIDAD, 
    ADD_ACTIVIDAD,
    PUT_ACTIVIDAD,
    DELETE_ACTIVIDAD,
    FILTER_POR_TEMPORADA, 
    ORDENAR_POR_NOMBRE, 
    ORDENAR_POR_POBLACION} from 'actions-type.js';

const URL = 'http://localhost:3001';

const getCountry = () => {
    return async (dispatch) => {
        try {
            let json = await axios.get(`${URL}/coutries`);
            return dispatch({
                type: GET_COUNTRY,
                payload: json.data
            })

        } catch (error) {
            console.log(error);
        }
    }
};

const getApi = () => {
    return async () => {
        try {
            let json = await axios.get(`${URL}/countries/api`);
            // console.log('listo');
        } catch (error) {
            console.log(error);
        }
    }
};

const firterPorContinente = (payload) => {
    return {
        type: FILTER_POR_CONTINENTE,
        payload
    }
};
// console.log(firterPorContinente);
const getPaisNombre = (name) => {
    return async (dispatch) => {
        try {
            let json = await axios.get(`${URL}/countries?name=`+ name)
            return dispatch({
                type: GET_PAIS_NOMBRE,
                payload: json.data
            })

        } catch (error) {
            console.log(error);
        }
    }
};

const getDetail = (id) => {
    return async (dispatch) => {
        try {
            let json = await axios.get(`${URL}/coutries/`+ id)
            return dispatch({
                type: GET_PAIS_ID,
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
};

const getActividad = () => {
    return async (dispatch) => {
        try {
           let json = await axios.get(`${URL}/activity`)
           return dispatch({
            type: GET_ACTIVIDAD,
            payload: json.data
           }) 


        } catch (error) {
            console.log(error);
        }
    }
};
const addActividad = (payload) => {
    return async () => {
        try {
            const response = await axios.post(`${URL}/activity`, payload)
            return response
        } catch (error) {
            console.log(error);
        }
    }
};

const putActividad = (payload) => {
    const name = payload.name
    return async () => {
        try {
            const response = await axios.put(`${URL}/activity?name=`+ name, payload)
            return response;

        } catch (error) {
            console.log(error);
        }
    }
};

const deleteActividad = (id) => {
    return async () => {
        try {
            const response = await axios.delete(`${URL}/activity/`+ id)
            return response;
        } catch (error) {
            console.log(error);
        }
    }
};
const firterPorTemporada = (payload) => {
    return {
        type: FILTER_POR_TEMPORADA,
        payload
    }
};

const ordenarPorNombre = (payload) => {
    return {
        type: ORDENAR_POR_NOMBRE,
        payload
    }
};

const ordenarPorPoblacion = (payload) => {
    return {
        type: ORDENAR_POR_POBLACION,
        payload
    }
};

export default {
    getCountry,
    getApi,
    firterPorContinente,
    getPaisNombre,
    getDetail,
    getActividad,
    addActividad,
    putActividad,
    deleteActividad,
    firterPorTemporada,
    ordenarPorNombre,
    ordenarPorPoblacion
}


