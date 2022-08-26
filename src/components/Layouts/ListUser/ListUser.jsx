import React from 'react'
import { useState,useEffect } from 'react'


export const ListUser = () => {
    const [api, setApi] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://backend-edw.herokuapp.com/usuarios');
            const data = await res.json();
            console.log(data);
            setApi(data);
        }
        fetchData();
    }, [])

  return (
    <div className="container_tables">
        <table id="customers">
        <tr>
            <th>Number</th>
            <th>User</th>
            <th>Email</th>
            <th>Password</th>
        </tr>
           
            {api.map(numberApi =>
                <tr>
                    <td>{numberApi[0]}</td>
                    <td>{numberApi[1]}</td>
                    <td>{numberApi[2]}</td>
                    <td>{numberApi[3]}</td>
                </tr>
            )}
        </table>
    </div>
  )
}
