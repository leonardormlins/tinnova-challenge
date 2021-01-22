import React, { useContext, useState } from 'react';
import StoreContext from './Store/Context';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logoMinor from './Styles/logoMinor.svg';
import './Styles/Home.css';
import ProfileBar from './ProfileBar';

const Search = () => {
    const [values, setValues] = useState([]);
    const [found, setFound] = useState([]);
    const { setToken } = useContext(StoreContext);

    function handleLogout() {
        return setToken('')
    }

    function onChange(event) {
        const { name, value } = event.target;

        console.log('name, value',event.target)

        setValues({
            ...values,
            [name]: value
        })
    }

    function handleSearch(){
        console.log('search',values.search)
        axios.get('user/'+ values.search)
        .then(resp => setFound(resp.data))
        .catch(err => console.log(err))
    }

    return (
        <div className="Home">
            <header className="Header-app">
                <div className="Minor-logo">
                    <img src={logoMinor} alt="logoMinor"/>
                </div>

                <div className="Logout-button">
                    <span className="material-icons">exit_to_app</span>
                    <div onClick={handleLogout} className="Logout-text">Logout</div>
                </div>

                <div className="Header-line"></div>
            </header>
            <div className="Space-top"></div>

            {/* Content */}
            {console.log('values',values)}
            <div className='Search-box'>
                <input className='Search-input' type='text' onChange={onChange}
                    placeholder='Search' name="search" value={values.search}/>
                <div className='Search-button' onClick={handleSearch}>
                    <span className="material-icons md-light">search</span>
                </div>
            </div>

            {console.log('found', found)}
            {found ? (<ProfileBar props={found} />) : null}

            <div className="Space"></div>
            <section className="Navbar">
            <div className="Options">
                <Link to='/'>
                    <span className="material-icons md-light">home</span>
                    <div className="Icon-info">Home</div>
                </Link>
                <Link to='/search'>
                    <span className="material-icons md-light">search</span>
                    <div>Search</div>
                </Link>
                <Link to='/people'>
                    <span className="material-icons md-light">people</span>
                    <div>People</div>
                </Link>
                <Link to='/profile'>
                    <span className="material-icons md-light">person</span>
                    <div>Profile</div>
                </Link>
            </div>
            </section>
        </div>
    );
}

export default Search;
