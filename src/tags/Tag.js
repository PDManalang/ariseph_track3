import React from 'react'
import Select from 'react-select'

const options = [
    { value: 'disaster', label: 'Disaster Risk Management Strategies' },
    { value: 'educ', label: 'Education and Training' },
    { value: 'urban', label: 'Urban Risk Reduction and Resilience' },
    { value: 'business', label: 'Small and Medium Businesses' },
    { value: 'invest', label: 'Investors and Investments' },
    { value: 'insur', label: 'Insurance' },
    { value: 'infra', label: 'Resilient Infrastructure' },
    { value: 'org', label: 'Organizational Matters' },
    { value: 'proj', label: 'Spacial Projects' }
  ]

function Tag({label}){
    return ( <div>
        <h1>{label}</h1>
        <Select options={options} />
    </div>
    )
}
export default Tag;