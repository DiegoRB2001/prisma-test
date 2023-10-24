"use client"

import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const DeletePage = ({params: {id}}) => {
    const router = useRouter();
    useEffect(() => {
        fetch(`/api/students/${id}`, {method: "DELETE"});
        router.push('/');
    }, [])
    
  return (
    <div>Eliminando estudiante</div>
  )
}

export default DeletePage