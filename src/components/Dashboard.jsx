"use client"

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import StudentCard from './StudentCard';

const Dashboard = () => {
    const router =  useRouter();
    const [students, setStudents] = useState([]);

    useEffect(() => {
      fetch(`/api/students`).then((response) => response.json()).then((data) => {setStudents(data)})
    }, [])
    
  return (
    <div className='  grid grid-cols-2 rounded-lg border-2 border-gray-400 bg-white'>
      <h1 className='text-3xl p-5 font-bold'>Dashboard</h1>
      <button className='ml-auto m-5 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-md p-2' onClick={() => router.push('/add')}>Agregar estudiante</button>
      <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-5 col-span-2'>
        {students.map((student) => <StudentCard key={student.id} student={student}/>)}
      </div>
    </div>
  )
}

export default Dashboard