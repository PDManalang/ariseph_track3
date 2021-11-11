import React from 'react'
import Select from 'react-select'

function Tag({label, options, onChange, defaultValue, isMulti}){
    return ( 
        <div>
            <h1>{label}</h1>
            <Select options={options} onChange={onChange} isMulti={isMulti} defaultValue={defaultValue}/>    
        </div>
    )
}
export default Tag;