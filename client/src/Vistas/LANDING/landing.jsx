import style from './landing.module.css';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { getApi } from '../../redux/actions'

const Landing = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getApi());
    }, [dispatch]);

    return(
        <Link to='/home'>
            
        </Link>
    )
}

export default Landing;