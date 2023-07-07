import React from 'react';
import { useLocation } from 'react-router-dom' ;
import style from './activityCard.module.css'

const ActivityCard = ({id, name, dificultad, duración, temporada, country, hadleDelete, imgBandera}) => {
    const location = useLocation();

    return (
        <Card>
            {location.pathname === '/activity' && 
            <button onClick={hadleDelete}>X</button>
            }

            <div>
                {(img) && <img src={imgBandera} alt="activ img"/> }
                <div>
                    <h3>{name}</h3>
                </div>
                <p>Dificultad: {dificultad}</p>
                <p>Duración: {duración} hs.</p>
                <p>Temporada: {temporada}</p>
                {location.pathname === '/activity' && <p>País: {country}</p>}
            </div>
        </Card>
    )
};

export default ActivityCard;