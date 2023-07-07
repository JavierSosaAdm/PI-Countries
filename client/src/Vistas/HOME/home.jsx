import style from './home.module.css';
import React, {useEffect, useState} from 'react';
import {
    getCountry,
    firterPorContinente,
    ordenarPorNombre,
    ordenarPorPoblacion
} from '../../redux/actions';
import Link from 'react-router-dom';
import Card from '../../Componentes/CARD/Card'
import Pagination from '../../Componentes/PAGINATION/paginacion';
import SearchBar from '../../Componentes/SEARCHBAR/SearchBar';

const Home = () => {
    
};

export default Home;