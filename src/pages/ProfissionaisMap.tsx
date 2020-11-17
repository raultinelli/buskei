import React, {useState} from 'react';
import logo from '../images/Logo.svg';
import iconpointer from '../images/iconpointer.svg';
import '../styles/pages/profissional-map.css';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import Leaflet from "leaflet";
import 'leaflet/dist/leaflet.css';


const initialPosition = { lat: -14.133648, lng: -57.2233902 };

const mapPinIcon = Leaflet.icon({
    iconUrl: iconpointer,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
});


function ProfissionaisMap() {


    const [location, setLocation] = useState(initialPosition);

    
        {/*if ('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition((position) => {
                    setLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                });
            } else {
                    console.log("não passou if");
            } */} 


    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={logo} alt="logo"/>
                    <h2>Escolha um profissional no mapa</h2>
                    <p>Clique no ponteiro de marcação para ter mais informações</p>
                </header>
                <footer>
                    <strong>Criado por</strong>
                    <span>Apollo</span>
                </footer>
            </aside>
            <MapContainer center={location} zoom={4.75} style={{ width: '100%', height: '100%' }}>
                {/*<TileLayer
                    url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />*/}
                <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker
                     icon={mapPinIcon}
                     position={[-19.7414837,-40.6651371]}
                ></Marker>
            </MapContainer>
        </div>
    );
}

export default ProfissionaisMap;