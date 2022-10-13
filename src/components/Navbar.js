// import React from 'react'
// import {Link} from 'react-router-dom'
// import {NavDropdown } from 'react-bootstrap';
// import DropdownItem from 'react-bootstrap/esm/DropdownItem';
// import img from "./img/agrecol.png";
// import "../styles/navbar.css"
// import { useState } from 'react'

// const logout = () =>{
//   localStorage.clear()
//   localStorage.clear()
//   window.location.href = '/'
// };
// // const toggleMenu = () =>{
// //   setMenu( !menu)
// // };

// // const [menu, setMenu] = useState (false)

// export const Navbar = () => (

//   <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     {/* // <nav className= { `Cabecera-nav ${menu ? 'isActive' : ''}` }> */}
//         {/* <Link className="navbar-brand" to="/"> | AGRECOL Andes | </Link> */}

//         <a href="/Principal">
//         <img  src={img} witdh="140" height="120"
//         />
//         </a>

//         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon" />
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav">

//             {/* <NavDropdown  title="RECONOCER">
//             <li>
//               <Link className="nav-link" to="/reconocerImagen">Reconocer Imagen</Link>
//             </li>

//             <li>
//               <Link className="nav-link" to="/Camara">Camara</Link>
//             </li>
            
            
//             </NavDropdown> */}

//             <li>
//               <Link className="nav-link" to="/Camara">Camara</Link>
//             </li>
            
//             <li className="nav-item">
//               <Link className="nav-link" to="/About">Informacion</Link>
//             </li>

//             <li>
//               <Link className="nav-link" to="/Geolocalizacion">Geolocalizacion</Link>
//             </li>

//           {localStorage.getItem('login')?
//             <>
//               <li>
//                 <Link className="nav-link" to="/Users">Usuarios</Link>
//               </li>

//               <li>
//                 <Link className="nav-link" to="/Plantas_medicinales">Plantas_medicinales</Link>
//               </li>

//               <li>
//               <Link className="nav-link" to="/Localizacion">Localizacion</Link>
//             </li>

//             </>
//             :<></>}

//             {localStorage.getItem('login')&&
//               <NavDropdown title={JSON.parse(localStorage.getItem('login')).email}>
//                 <DropdownItem href={"/"} onClick={logout}>Cerrar Sesion</DropdownItem>
//               </NavDropdown>
//             } 
            
//           </ul>
//         </div>
//       </nav>

// );





import React from 'react'
import {Link} from 'react-router-dom'
import {NavDropdown } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import img from "./img/agrecol.png";
import "../styles/navbar.css"
import { useState } from 'react'

const logout = () =>{
  localStorage.clear()
  localStorage.clear()
  window.location.href = '/'
};
// const toggleMenu = () =>{
//   setMenu( !menu)
// };

// const [menu, setMenu] = useState (false)

export const Navbar = () => (

  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    
    {/* // <nav className= { `Cabecera-nav ${menu ? 'isActive' : ''}` }> */}
        {/* <Link className="navbar-brand" to="/"> | AGRECOL Andes | </Link> */}

        <a href="/Principal">
        <img  src={img} witdh="140" height="120"
        />
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

            {/* <NavDropdown  title="RECONOCER">
            <li>
              <Link className="nav-link" to="/reconocerImagen">Reconocer Imagen</Link>
            </li>

            <li>
              <Link className="nav-link" to="/Camara">Camara</Link>
            </li>
            
            
            </NavDropdown> */}

            <li>
              <Link className="nav-link" to="/Camara">Camara</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/About">Informacion</Link>
            </li>

            <li>
              <Link className="nav-link" to="/Geolocalizacion">Geolocalizacion</Link>
            </li>

          {localStorage.getItem('login')?
            <>
              <li>
                <Link className="nav-link" to="/Users">Usuarios</Link>
              </li>

              <li>
                <Link className="nav-link" to="/Plantas_medicinales">Plantas_medicinales</Link>
              </li>

              <li>
              <Link className="nav-link" to="/Localizacion">Localizacion</Link>
            </li>

            </>
            :<></>}

            {localStorage.getItem('login')&&
              <NavDropdown title={JSON.parse(localStorage.getItem('login')).email}>
                <DropdownItem href={"/"} onClick={logout}>Cerrar Sesion</DropdownItem>
              </NavDropdown>
            } 
            
          </ul>
        </div>
      </nav>

);

