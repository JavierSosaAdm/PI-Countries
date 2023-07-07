import React from "react";
import SearchBar from "../SEARCHBAR/SearchBar";
import style from './nav.module.css';
import { Link } from "react-router-dom";
const Nav = ({SearchBar}) => {

    return (
        <div>
            <h1>Bienvenidos al planisferio</h1>
            <SearchBar onSearch={onSearch}/>
                <button>
                    <Link>HOME</Link>
                </button>

                <button>
                    <Link>ACTIVITY</Link>
                </button>

                <button>
                    <Link>LOGOUT</Link>
                </button>

                <button>
                    <Link></Link>
                </button>
        </div>
    )
};

export default Nav;