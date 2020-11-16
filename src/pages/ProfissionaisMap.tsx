import React from 'react';
import logo from '../images/Logo.svg';
import '../styles/pages/profissional-map.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function ProfissionaisMap() {
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={logo} alt="logo"/>
                    <h2>Escolha um profissional no mapa</h2>
                    <p>Para mais informações, entre em contato pelo WhatsApp do profissional.</p>
                </header>
                <footer>
                    <strong>Criado por</strong>
                    <span>Apollo</span>
                </footer>
            </aside>
            <MapContainer center={[-15.7193229,-55.3860335]} zoom={15} style={{ width: '100%', height: '100%' }}>
                {/*<TileLayer
                    url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />*/}
                <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
            </MapContainer>
        </div>
    );
}

export default ProfissionaisMap;