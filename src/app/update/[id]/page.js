"use client"

import Form from '@/components/Form';
import { useEffect, useState } from 'react';

const ModifyStudent = ({params: {id}}) => {

  const [student, setStudent] = useState({})
  useEffect(() => {
    fetch(`/api/students/${id}`).then((response) => response.json()).then((data) => {setStudent(data)})
  }, [])
  
  return (
    <div className='col-span-2 row-span-3 justify-self-center self-center'>
      <Form student={student}/>
      </div>
  )
}

export default ModifyStudent