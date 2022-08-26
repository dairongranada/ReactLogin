import React from 'react'
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react'


export const FomularioLogin = () => {

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://backend-edw.herokuapp.com/usuarios');
            const data = await res.json();
            console.log(data);
        }
        fetchData();
    }, [])



    return (
        <div  className="containerlogin">
            <div className="login">
                <form>
                <h1>INICIO DE SESION</h1>
                    <div className="grupForm">
                        <input id="inputLoginNameUsuario"  required type="text"/>
                        <label>Nombre Usuario</label>
                    </div>
                    <div className="grupForm">
                        <input required type="password"/>
                        <label>Contraseña </label>
                    </div>
                <button type='submit'className="button">Iniciar sesión</button>
                <div className= "ContenedoresDePregunta">
                    <Link to="#"> ¿A olvidado Su contraseña? </Link>
                    <Link to="/Registro"> ¿No tienes una una Cuenta? </Link>
                </div>
                </form>
            </div>
        </div> 
    )
}

