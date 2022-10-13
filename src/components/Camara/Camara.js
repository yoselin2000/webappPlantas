
// import React, { useState, useEffect, useRef } from 'react';
// import axios from "axios";


// const API = process.env.REACT_APP_API;

// export const Camara = () => {

//   const [pred, setPred]= useState(false);
//   const [llamar, setLlamar]= useState(false);
//   const videoRef = useRef(null);
//   const photoRef = useRef(null);
//   const [hasPhoto, setHasPhoto] = useState(false);
//   // const [image, setImage] = useState({'file':''});
//   const [infoPredict, setInfoPredict] = useState({
//     nombre: '',
//     nombre_cientifico: '',
//     propiedades: '',


//   })

//   const getVideo = () =>{


//       navigator.mediaDevices
//       .getUserMedia({
//         video: true, video: {width: 320, height: 270},
//       })
//       .then(stream => {
//         let video = videoRef.current;
//         video.srcObject = stream;
//         video.play();
//       })
//       .catch(err => {
//         console.error(err);
//       })
//   }

//   const takePhoto = async (e)  =>{
//     const width = 320;
//     const height = width / (14/12);
//     let video = videoRef.current;
//     let photo = photoRef.current;

//     photo.width = width;
//     photo.height = height;
//     let context = photo.getContext('2d');
//     context.drawImage(video, 0, 0, width, height);
//     setHasPhoto(true);
//     // console.log(photo.toDataURL('image/jpg'));
    
//     let pathfile = photo.toDataURL('image/jpg').split(";base64,").pop();
//   //  setImage({"file": pathfile});
//     console.log(JSON.parse(localStorage.getItem('login')).email + '' + Math.random())
//     var nombre= JSON.parse(localStorage.getItem('login')).email + '' + Math.random()+ ".png"
//     localStorage.setItem('photo', nombre)

//    axios.post(`${API}prediccion img save`, {'json':pathfile, 'nombre': nombre},{
//     }).then((response) => {
//       console.log(response);
      
//       setPred(true)
//     });

//   //  await axios.post(`${API}prediccion`, pathfile);
//   //  await axios.post(`${API}prediccion`, {'json':pathfile});
//     // console.log(photo.URL.toDataURL(e.target.files[0]));
//     // let image64 = URL.createObjectURL(e.target.files[0])
//   }

//   const onChangePicture = () => {
//     // console.log(image.file)
//     axios.post(`${API}predict`, {'photo' : localStorage.getItem('photo') },{
//     }).then((response) => {
//         console.log(response.data);
//         setInfoPredict({nombre: response.data})
//         setLlamar(true)
//       });
// };

//   useEffect(() => {
//     getVideo();
//   }, [videoRef]);

  
//     return (
//         <div>
//           <center><h4> RECONOCIMIENTO DE LA PLANTA</h4></center>
//             <br/>
//             <div className='camera'>
//             <center>
//               <video  ref={videoRef}></video>
//             </center>
//             </div>

//             <div>
//             <center>
//               <button className='btn btn-dark' onClick={takePhoto} >CAPTURAR IMAGEN</button>
//               {/* <button onClick={onChangePicture} >PREDICCION</button> */}
//               {/* <button onClick={onChangePicture} >guardar</button> */}
//             </center>
//             </div>



//             <center>
//               <h1></h1>
//               <h1></h1>
              
//             <div className={'result' + (hasPhoto ? 'hasPhoto' : '')}>
//               <canvas ref ={photoRef}></canvas>
              
//               {/* <button>guardar</button> */}
//             </div>



//             {pred &&
//             <div>
//             <button  className='btn btn-dark' onClick={onChangePicture} >PREDECIR</button>

//             </div>

//             }
//             {llamar &&
//             <>
//             <h1></h1>
//             <h1></h1>
//             <h1></h1>
//             <h1></h1>
//             <h4>{infoPredict.nombre}</h4>
//               <p></p>
//             </>

//             }

//             </center>  
//         </div>
//     );
// };





import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";


const API = process.env.REACT_APP_API;

export const Camara = () => {

  const [pred, setPred]= useState(false);
  const [llamar, setLlamar]= useState(false);
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const [hasPhoto, setHasPhoto] = useState(false);
  // const [image, setImage] = useState({'file':''});


  const [infoPredict, setInfoPredict] = useState({
    nombre: '',
    nombre_cientifico: '',
    propiedades: '',

  })

  const getVideo = () =>{


      // navigator.mediaDevices
      // .getUserMedia({
      //   video: {width: 700, height: 400}
      // })
      // .then(stream => {
        let video = videoRef.current;
      //   video.srcObject = stream;
      //   video.play();
      // })
      // .catch(err => {
      //   console.error(err);
      // })

      if (!("mediaDevices" in navigator)) {
        navigator.mediaDevices = {};
      }
      
      if (!("getUserMedia" in navigator.mediaDevices)) {
        navigator.mediaDevices.getUserMedia = function (constraints) {var getUserMedia = navigator.webkitGetUserMedia  || navigator.mozGetUserMedia;
          if (!getUserMedia) {
            return Promise.reject(new Error(
                "getUserMedia is not implemented!"));
          }
      
          return new Promise(function (resolve, reject) {
            getUserMedia.call(navigator, 
                constraints, resolve, reject);
          });
        };
      }
      
      navigator.mediaDevices
      .getUserMedia({ video: true,video: {width: 350, height: 290} })
      .then(function (stream) {
        video.srcObject = stream;
        video.play();

      })
      .catch(function (err) {
        console.log(err);

      });
        
  }

  const takePhoto = async (e)  =>{
    const width = 350;
    const height = width / (14/12);
    let video = videoRef.current;
    let photo = photoRef.current;

    photo.width = width;
    photo.height = height;
    let context = photo.getContext('2d');
    context.drawImage(video, 0, 0, width, height);
    setHasPhoto(true);
    // console.log(photo.toDataURL('image/jpg'));
    
    let pathfile = photo.toDataURL('image/jpg').split(";base64,").pop();
  //  setImage({"file": pathfile});
    console.log(JSON.parse(localStorage.getItem('login')).email + '' + Math.random())
    var nombre= JSON.parse(localStorage.getItem('login')).email + '' + Math.random()+ ".png"
    localStorage.setItem('photo ', nombre )

   axios.post(`${API}prediccion img save`, {'json':pathfile, 'nombre': nombre},{
    }).then((response) => {
      console.log(response);
      
      setPred(true)
    });

    // if(navigator.geolocation){
    //   var success = function(position){
    //   var latitud = position.coords.latitude,
    //       longitud = position.coords.longitude;

    //     console.log(latitud);
    //     console.log(longitud);
    //   }
    //   // navigator.geolocation.getCurrentPosition(success, function(msg){
    //   // console.error( msg );
    //   // });
    //   }
  }

  

  const onChangePicture = () => {
    // console.log(image.file)
    axios.post(`${API}predict`, {'photo' : localStorage.getItem('photo') },{
    }).then((response) => {
        console.log(response.data);
        // setInfoPredict({nombre: response.data + " " + Math.floor(Math.random() * (100 - 51) + 51) + "%"})
        setInfoPredict({nombre: response.data})
        setLlamar(true)
      });
};

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  
    return (
        <div>
            <div className='camera'>
            <center>
              <video  ref={videoRef}></video>
            </center>
            </div>

            <div>
            <center>
              <button className='btn btn-dark' onClick={takePhoto} >CAPTURAR IMAGEN</button>
            </center>
            </div>



            <center>
              <h1></h1>
              <h1></h1>
              
            <div className={'result' + (hasPhoto ? 'hasPhoto' : '')}>
              <canvas ref ={photoRef}></canvas>
              
            </div>

            {pred &&
            <div>
            <button  className='btn btn-dark' onClick={onChangePicture} >PREDECIR</button>
            </div>

            }
            {llamar &&
            <>
            <h1></h1>
            <h1></h1>
            <h4>{infoPredict.nombre}</h4>
              <p></p>
            </>

            }
            </center>  
        </div>
    );
};