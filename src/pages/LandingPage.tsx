import React from 'react';
import '../styles/pages/landing.css';
import logoimg from '../images/Logo.svg';
import { FiArrowRight } from 'react-icons/fi';
import imgback from '../images/landpage.svg';
import { Link } from 'react-router-dom';

function Landing() {
    return(
        <div id="landing-page">
            <div className="content-wrapper">
                <img src={logoimg} alt="logo"/>
                <main>
                <h1>Sua pele merece os melhores</h1>
                <p>Encontre profissionais da saúde estética próximos a você</p>
                </main>
                <div className="fundo">
                <img src={imgback} alt="fundo"/>
                </div>
                <Link to="/app" className="enter-app">
                <FiArrowRight size={30} color="#fff" />
                </Link>
            </div>
        </div>
    );
}

export default Landing;