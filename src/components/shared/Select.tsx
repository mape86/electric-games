import React from "react"

interface SelectProps {
    name: string
    options: string[]
    onChange: (s: string) => void
    currentValue: string
}

const Select = ({name, options, onChange, currentValue}: SelectProps) => {
    return (
        <>
        <label>{name}</label>
        <select className="form-select bg-dark text-white" onChange={(e) => onChange(e.target.value)}>
            {options.map((option) => <option key={option} value={option} selected={currentValue === option}>{option}</option>) }
        </select>
        </>
    )
}

export default Select