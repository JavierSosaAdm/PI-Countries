import style from './card.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({imgBandera, name, id, población, continente, imgBandera, }) => {
    return (
        <div className={style.card}>
            <img src={imgBandera} className={style.cardImg} alt="img not found"/>
            <Link to={`/detail/${id}`}>
                <h1 className={style.name}>Pais: {name}</h1>
            </Link>
            <h2 className={style.continente}>Continente: {continente}</h2>
            <h2 className={style.poblacion}>Población: {población.toLocaleString('es-ES', { style: 'decimal' })}</h2>
            <h2 className={style.id}>Id: {id}</h2>
            <Link to={`/detail/${id}`}>
                <button className={style.boton}>
                    <span>Ver Detalles</span>
                </button>
            </Link>
        </div>
    );
};

export default Card;