import React,{useEffect, useState} from'react';
import axios from 'axios';

const ListaLibros =()=>{
    const [libros, serLibros] = useState([]);

    useEffect(()=>{axios.get('http://127.0.0.1:8000/api/libros')
    .then(response =>{
        serLibros(response.data);
    })
    .catch(error =>{
        console.error(error);
    });
},[]);
return(
    <div>
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th scope='col'>Id</th>
                    <th scope='col'>Titulo</th>
                    <th scope='col'>Autor</th>
                    <th scope='col'>Precio</th>
                    <th scope='col'>Opciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    libros.map(libro =>(
                        <tr key={libro.id}>
                            <th scope='row'>{libro.id}</th>
                            <td>{libro.tituloLibro}</td>
                            <td>{libro.autor}</td>
                            <td>${libro.precio}</td>
                            <td>
                                {/**Botones de editar y eliminar */}
                                <button className='btn btn-primary'>Editar</button>
                                <button className='btn btn-danger'>Eliminar</button>
                            </td>
                        </tr>
                    ))}
            
            </tbody>
        </table>
    </div>
    );
};
export default ListaLibros;