import { useRouter } from 'next/navigation';
import React from 'react'

const StudentCard = ({student}) => {
    const router = useRouter();
    const{id, nombre, genero, edad, carrera} = student;
  return (
    <div className='bg-gray-300 p-5 rounded-md m-2 border border-black'>
        <h1 className='font-bold text-2xl'>{nombre}</h1>
        <p>{genero}</p>
        <p>{edad}</p>
        <p>{carrera}</p>
        <div className='grid grid-cols-2 gap-5 mt-5'>
            <button className='text-white font-bold bg-orange-500 hover:bg-orange-600 rounded-md p-2' onClick={() => router.push(`update/${id}`)}>Modificar</button>
            <button className='text-white font-bold bg-red-500 hover:bg-red-600 rounded-md p-2' onClick={() => router.push(`delete/${id}`)}>Eliminar</button>
        </div>
    </div>
  )
}

export default StudentCard