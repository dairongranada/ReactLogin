import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';

import axios from 'axios'

export const FormularioRegis = ({inputColorTwo}) => {
    

            // MENSAJES DE <span>{menssa}</span>
        // VALORES  DE   LOS   INPUTS  Y  DE LOS  USE STATE
    //////////////////////////////////////////////////////////////
    const [menssaName,setMenssaName ] = useState("")
    const [inputName,setInputName ] = useState("")
    const valueName = (e) => {
        setInputName(e.target.value);
        console.log(inputName);
    }
    //////////////////////////////////////////////////////////////

    const [menssaEmail,setMenssaEmail ]= useState(" ")
    const [inputEmail,setInputEmail ]= useState(" ")
    const valueEmail = (e) =>{
        setInputEmail(e.target.value)
        console.log(inputEmail);
    }
    //////////////////////////////////////////////////////////////
    const [menssaPass,setMenssaPass ]= useState(" ")
    const [inputPassword,setInputPassword ]= useState(" ")

    const valuePassword = (e) => {
        setInputPassword(e.target.value);
        console.log(inputPassword);

    }
    //////////////////////////////////////////////////////////////
 
    const [menssaPass2,setMenssaPass2 ]= useState(" ")
    const [inputPasswordCon,setInputPasswordCon ]= useState(" ")

    const valuePasswordConfirm = (e) => {
        setInputPasswordCon(e.target.value);
        console.log(inputPasswordCon);

    }



    const regexName = /^[a-zA-Z0-9]{3,20}$/;
    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

    useEffect(() =>{
        // Validacion Del Nombre
        regexName.test(inputName) ? setMenssaName(''): setMenssaName('X');
        // Validacion Del Name
        regexEmail.test(inputEmail) ? setMenssaEmail(''): setMenssaEmail('X');
        // Validacion De La Contraseña
        regexPassword.test(inputPassword) ? setMenssaPass(''): setMenssaPass('X');
        inputPassword === inputPasswordCon ? setMenssaPass2(''): setMenssaPass2('X')
    },[inputName, inputEmail, regexName, regexEmail, regexPassword, inputPassword, inputPasswordCon])



    const [messageAxios,setMessageAxios ]= useState("")

    const axiosfuntion = () =>{
        axios.post('https://backend-edw.herokuapp.com/usuario', 
            {
                "username":inputEmail ,
                "password": inputPassword,
                "name": inputName,
            })
          .then(function (response) {
            console.log(response);
            console.log(response.data);
            let axiosVariable = response.data
            setMessageAxios(axiosVariable)
          })
          .catch(function (error) {
            console.log(error);
          });
    }




    return (
        <div> 
            <div  className="containerlogin">
                <div className="login">
                    <div>
                        <h1>REGISTRO</h1>
                        <div className="grupForm">
                            <input type="text"  onChange={valueName} />
                            <label>Nombre Usuario</label>
                            <p className='spanErrors'>{menssaName}</p>
                        </div>
                        <div className="grupForm">
                            <input type="email"  onChange={valueEmail}/>
                            <label>Email</label>
                            <p className='spanErrors'>{menssaEmail}</p>
                        </div>
                        <div className="grupForm">
                            <input type="password"  onChange={valuePassword}/>
                            <label>Contraseña</label>
                            <p className='spanErrors'>{menssaPass}</p>
                        </div>
                        <div className="grupForm">
                            <input type="password"  onChange={valuePasswordConfirm}/>
                            <label>Confirmar Contraseña</label>
                            <p className='spanErrors'>{menssaPass2}</p>
                        </div>
                        <p>{messageAxios.Message}</p>
                        <button onClick={axiosfuntion} type='submit'>Registarse</button>
                        <div className= "ContenedoresDePregunta">
                            <Link to="/Login"> ¿Ya tienes una una Cuenta? </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    )
}