import { useRouter } from 'next/navigation';
import React from 'react'

const StudentCard = ({student}) => {
    const router = useRouter();
    const{id, nombre, genero, edad, carrera} = student;
  return (
    <div className='bg-gray-100 p-5 rounded-md m-2 border border-black font-bold'>
        <h1 className=' text-2xl mb-2'>{nombre}</h1>
        <p>Género: <span className='font-normal'>{genero}</span></p>
        <p>Edad: <span className='font-normal'>{edad}</span></p>
        <p>Carrera: <span className='font-normal'>{carrera}</span></p>
        <div className='grid grid-cols-2 gap-5 mt-5'>
            <button className='text-white font-bold bg-orange-500 hover:bg-orange-600 rounded-md p-2' onClick={() => router.push(`update/${id}`)}>Modificar</button>
            <button className='text-white font-bold bg-red-500 hover:bg-red-600 rounded-md p-2' onClick={() => router.push(`delete/${id}`)}>Eliminar</button>
        </div>
    </div>
  )
}

export default StudentCard