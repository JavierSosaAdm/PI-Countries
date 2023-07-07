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

const initialState = {
    allCountries: [],
    allActivities: [],
    country:[],
    activity: [],
    detail: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_COUNTRY:
            return {
                ...state,
                country: action.payload,
                allCountries: action.payload
            }

        case FILTER_POR_CONTINENTE:
            const allCountries = state.allCountries
            const continenteFiltrado = action.payload === 'All'
            ? allCountries
            : allCountries.filter(pais => action.payload.includes(pais.continente))
            return {
                ...state,
                country: continenteFiltrado
            }

        case FILTER_POR_TEMPORADA:
            const allActivities = state.allActivities
            const actividadFiltrada = action.payload === 'All'
            ? allActivities
            : allActivities.filter(acc => acc.temporada.includes(action.payload)) 
            return {
                ...state,
                activity: actividadFiltrada
            }

        case ORDENAR_POR_NOMBRE:
            let comparar = (a, b) => {
                if (a.name > b.name) {
                  return 1;
                }
                if (b.name > a.name) {
                  return -1;
                }
                return 0;
              };
              
              const sort = [...state.country].sort(comparar);
              
              if (action.payload === "desc") {
                sort.reverse();
              }
              
              return {
                ...state,
                countries: sort
              };

        case ORDENAR_POR_POBLACION:
            const compararPob = (a, b) => {
                if (a.población > b.población) {
                  return 1;
                }
                if (b.población > a.población) {
                  return -1;
                }
                return 0;
              };
              
              const sortPob = [...state.country].sort(compararPob);
              
              if (action.payload === "desc") {
                sortPob.reverse();
              }
              
              return {
                ...state,
                countries: sortPob
              };

        case GET_PAIS_NOMBRE:
            return {
                ...state,
                country: action.payload
            }

        case ADD_ACTIVIDAD:
            return {
                ...state
            }

        case PUT_ACTIVIDAD:
            return {
                ...state
            }

        case DELETE_ACTIVIDAD:
            return {
                ...state,
                activity: action.payload
            }

        case GET_ACTIVIDAD:
            return {
                ...state,
                activity: action.payload,
                allActivities: action.payload
            }

        case GET_PAIS_ID:
            return {
                ...state,
                detail: action.payload
            }

        default:
            return {...state};
    }
};

export default rootReducer;