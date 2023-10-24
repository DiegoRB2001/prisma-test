'use client'

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import CustomInput from './CustomInput';

const Form = ({student}) => {
  const router = useRouter();
  const [data, setData] = useState({});

  useEffect(() => {
    setData({...student})
  }, [student])
  
  
  async function handleSubmit(e){
      e.preventDefault();
      if(Object.keys(student).length>0){
        await fetch(`/api/students/${student.id}`, {method: "PUT",  body: JSON.stringify(data)});
      }
      else{
        await fetch("/api/students", {method: "POST",  body: JSON.stringify(data)});
      }
      router.push('/');
  }
  const {nombre, edad, genero, carrera} = data;
  return (
    <div className='bg-white flex flex-col justify-self-center min-w-[400px] rounded-lg border-2 border-gray-400'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5 p-10 h-full w-full items-center justify-center'>
        <h1 className='text-center mb-2 text-2xl font-bold'>{Object.keys(student).length>0 ? "Modificar estudiante" : "Agregar estudiante"}</h1>
        <CustomInput 
        data={data} 
        id={"name"} 
        placeholder={"Nombre"} 
        initialValue={nombre} 
        labelText={"Nombre"} 
        value={nombre} 
        type={"text"}
        handleChange={(e) => setData({...data, nombre: e.target.value})} 
        />
        <div className='flex flex-col w-full gap-2'>
          <label htmlFor="gender">Género</label>
          <select name="gender" id="gender" className='p-1 rounded-lg bg-gray-200' value={genero} onChange={(e) => setData({...data, genero: e.target.value})}>
            <option value="default" >Selecciona un género</option>
            <option value="masculino" >Masculino</option>
            <option value="femenino" >Femenino</option>
            <option value="otro" >Otro</option>
          </select>
        </div>
        <CustomInput 
        data={data} 
        id={"age"} 
        placeholder={"Edad"} 
        initialValue={edad} 
        labelText={"Edad"} 
        value={edad} 
        type={"number"}
        handleChange={(e) => setData({...data, edad: Number(e.target.value)})} 
        />
        <CustomInput 
        data={data} 
        id={"carrera"} 
        placeholder={"Carrera"} 
        initialValue={carrera} 
        labelText={"Carrera"} 
        value={carrera} 
        type={"text"}
        handleChange={(e) => setData({...data, carrera: e.target.value})} 
        />
        <button type="submit" className='text-xl text-white font-bold bg-blue-500 hover:bg-blue-600  rounded-md p-2 px-3 w-full self-center mt-3'>{Object.keys(student).length>0 ? "Modificar" : "Agregar"}</button>
      </form>
      <button className='text-white font-bold bg-blue-500 hover:bg-blue-600  rounded-md p-1 px-3 w-fit text-xs ml-auto mb-2 mr-2' onClick={() => router.push('/')}>Volver</button>
    </div>
  )
}

export default Form