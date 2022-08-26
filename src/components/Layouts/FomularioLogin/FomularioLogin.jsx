import React from 'react'
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react'


export const FomularioLogin = () => {

    const [formLogin, setFormLogin] = useState([])
    const[userName,setUserName] = useState([])


    const [passNameLogin,setPassNameLogin ]= useState("")
    //Obetener Valor Del Input UserName
    const valueNameLogin = (e) => {setPassNameLogin(e.target.value)}


    const [passwordLogin,setPasswordLogin ]= useState("")
    //Obetener Valor Del Input Password
    const valuePassLogin = (e) => {setPasswordLogin(e.target.value)}



    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://backend-edw.herokuapp.com/usuarios');
            const data = await res.json();
            setFormLogin(data)
        }
        fetchData();
    }, [])  



const handleclick = ()=>{
    formLogin.find(function(e) {
        if (e[1] === passNameLogin && e[3] === passwordLogin ) {
            console.log('INICIO DE SESION EXITOSO!')
        }else{console.log('REGISTRESE!')}
    })
}



    return (
        <div  className="containerlogin">
            <div className="login">
                <h1>INICIO DE SESION</h1>
                    <div className="grupForm">
                        <input onChange={valueNameLogin}  required type="text"/>
                        <label>Nombre Usuario</label>
                    </div>
                    <div className="grupForm">
                        <input required  onChange={valuePassLogin} type="password" />
                        <label>Contraseña </label>
                    </div>
                <button type='submit'className="button"  onClick={handleclick} >Iniciar sesión</button>
                <div className= "ContenedoresDePregunta">
                    <Link to="#"> ¿A olvidado Su contraseña? </Link>
                    <Link to="/Registro"> ¿No tienes una una Cuenta? </Link>
                </div>
            </div>
        </div> 
    )
}



