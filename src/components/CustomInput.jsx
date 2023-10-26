import React from 'react'

const CustomInput = ({id, placeholder, labelText, handleChange, initialValue, value, type}) => {
  return (
    <div className='flex flex-col w-full gap-2'>
          <label htmlFor={id}>{labelText}</label>
          <input type={type} name={id} id={id} placeholder= {placeholder} defaultValue={initialValue || "" } value={value || ""} className='bg-gray-200 p-1 rounded-lg pl-2' onChange={handleChange} />
    </div>
  )
}

export default CustomInput