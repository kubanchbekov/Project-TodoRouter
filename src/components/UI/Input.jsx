import React from 'react'

const Input = ({onChange,type,value,...rest}) => {
  return (
    <div>
        <input type={type} value={value} onChange={onChange} {...rest} />


    </div>
  )
}

export default Input