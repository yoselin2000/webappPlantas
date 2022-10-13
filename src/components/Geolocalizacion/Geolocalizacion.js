// import React, { useEffect, useState, useRef } from "react";

// import { Map, TileLayer, Marker, Popup} from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import { IconLocation } from "./IconLocation";
// import axios from "axios";
// import '../../styles/geolocalizacion.css'
// import useGeoLocation from "./useGeolocation";

// const API = process.env.REACT_APP_API;

// export const Geolocalizacion = () => {
//   const [Loc, setLoc] = useState([]);
//   const position = [-17.8965, -65.04534];
//   const [busqueda, setBusqueda]= useState("");
//   const mapRef = useRef();
//   const location = useGeoLocation();
//   //const position1 = [-17.89667, -65.03217]\
//   useEffect(() => {
//     getLoc();
//   }, []);
//   const getLoc = async () => {
//     const result = await axios.get(`${API}/Localizacion`);
//     console.log(result.data);
//     setLoc(result.data);
//   };



//       const showMyLocation = () => {
//         if (location.loaded && !location.error) {
//           mapRef.current.leafletElement.flyTo(
//             [location.coordinates.lat, location.coordinates.lng],
//             { animate: true }
//           );
//         } else {
//           alert(location.error.message);
//         }
//       };

    
//       const handleChange = (e) => {
//         setBusqueda(e.target.value);
//         filtrar(e.target.value);
//       }
      
//       const filtrar = (terminoBusqueda)=>{
    
//         var resultadosBusqueda=Loc.filter((elemento)=>{
//           if(elemento.nombre_planta.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
//           ){
//             return elemento;
//           }
//         })
//         setLoc(resultadosBusqueda);
//       }
    

//   return (
//     <div>
//     <form className="form-inline" >
//     <input className="form-control mr-sm-2" value={busqueda} placeholder = "SEARCH" onChange={handleChange}/>
//     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//     </form>

//     <Map
//       className="map"
//       center={position}
//       zoom={10}
//       style={{ height: 500, width: "100%" }}


//     >
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//       {Loc.map((Lo, index) => (
//         <Marker
//           position={[Lo.latitud, Lo.longitud]}
//           icon={IconLocation}
//           title={Lo.nombre_planta}
//           // nombre={[planta.nombre_planta]}
//         >
//           <Popup>

//             <img
//               className="popup-img"
//               // src={API + "/file/" + planta.imagen}
//               src={Lo.imagen}
//               alt={Lo.nombre_planta}
//             />
//             <h4></h4>
//             {Lo.nombre_planta} <br /> {"Latitud: " + Lo.latitud} <br />{"Longitud: " + Lo.longitud}{" "}
    
//           </Popup>

//         </Marker>

//       ))}
// {/* 
//           <BaseLayer name="Satellite View">
//             <TileLayer
//                 url='https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
//                 maxZoom= {20}
//               />
            
//           </BaseLayer> */}

//     </Map>
//     </div>
//   );
// };

// export default Geolocalizacion;




// PRUEBA

import React, { useEffect, useState, useRef, Link } from "react";

import { Map, TileLayer, Marker, Popup, LayersControl} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { IconLocation } from "./IconLocation";
import axios from "axios";
import '../../styles/geolocalizacion.css'
import useGeoLocation from "./useGeolocation";
import { CircleMarker, LayerGroup } from "leaflet";


const API = process.env.REACT_APP_API;

export const Geolocalizacion = () => {
  const [Loc, setLoc] = useState([]);
  const position = [-17.8965, -65.04534];
  const mapRef = useRef();
  const location = useGeoLocation();
  const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
  const [busqueda, setBusqueda]= useState("");

  useEffect(() => {
    getLoc();
  }, []);
  
  const getLoc = async () => {
    const result = await axios.get(`${API}/Localizacion`);
    console.log(result.data);
    setLoc(result.data);
  };

      const showMyLocation = () => {
        if (location.loaded && !location.error) {
          mapRef.current.leafletElement.flyTo(
            [location.coordinates.lat, location.coordinates.lng],
            { animate: true }
          );
        } else {
          alert(location.error.message);
        }
      };


        const handleChange = (e) => {
        setBusqueda(e.target.value);
        filtrar(e.target.value);
      }
      
      const filtrar = (terminoBusqueda)=>{
    
        var resultadosBusqueda=Loc.filter((elemento)=>{
          if(elemento.nombre_planta.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
          ){
            return elemento;
          }
        })
        setLoc(resultadosBusqueda);
      }
    
     const mapas = [
      {
        name: "leaflet",
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        checked: true
      },
      {
        name: "satelite",
        url: "http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        checked: false
      }
     ] 

     const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    
    function success(pos) {
      const crd = pos.coords;
    
      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
      return (<Marker
        position={[crd.latitude, crd.longitude]}
        icon={IconLocation}
      >
      </Marker>)
    }
    
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    
    navigator.geolocation.getCurrentPosition(success, error, options);
console.log(navigator.geolocation.getCurrentPosition(success, error, options))

// const MiUbicacion =()=>{
//   const ubi = navigator.geolocation.getCurrentPosition(success, error, options);
//   ubi.
// }

  return (
    <div>
      <form className="form-inline" >
     <input className="form-control mr-sm-2" value={busqueda} placeholder = "SEARCH" onChange={handleChange}/>
     {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
     </form>
     <br/>
     
    <Map
      className="map"
      center={position}
      zoom={10}
      style={{ height: 500, width: "100%" }}
      // ref={mapRef}
      // ref={showMyLocation}

    >

      <LayersControl position="topright"> 
        {mapas.map(({name, url, checked})=> {
          return(
            <LayersControl.BaseLayer checked={checked} name={name} key={name}>
              <TileLayer url={url}/>
            </LayersControl.BaseLayer>
          )
        })}
      </LayersControl>

      {/* <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
      {/* <TileLayer url="http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" /> */}

      {Loc.map((Lo, index, planta) => (
        <Marker
          position={[Lo.latitud, Lo.longitud]}
          icon={IconLocation}
          title={Lo.nombre_planta}
          key={index}
          // nombre={[planta.nombre_planta]}
        >
          <Popup>
        
            <img
              className="popup-img"
              // src={API + "/file/" + planta.imagen}
              src={Lo.imagen}
              alt={Lo.nombre_planta}
            />
            <h4></h4>
            {Lo.nombre_planta} <br /> {"Latitud: " + Lo.latitud} <br />{"Longitud: " + Lo.longitud}{" "} 
          <h1></h1>
          <a href={`/planta_medicinal/${planta._id}`}>
              <button className="btn btn-dark btn-sm ">CONOCER</button>
              </a>

          {/* {location.loaded && !location.error && (
            <Marker icon={IconLocation} position={[location.coordinates.lat. location.coordinates.lng]}></Marker>
          )} */}

          </Popup>
        
        </Marker>


      ))}



      {/* <button >
      <img src="/path/to/img/of/penguin.png"/>
      </button> */}

      
      {/* {location.loaded && !location.error && (
            <Marker
              icon={IconLocation}
              position={[location.latitud, location.longitud]}
            ></Marker>
          )} */}

    </Map>
          <div className="row my-4">
          <div className="col d-flex justify-content-center">
            <button className="btn btn-primary" onClick={showMyLocation}>
              Locate Me
            </button>
          </div>
        </div>
        </div>
  );
};

export default Geolocalizacion;
