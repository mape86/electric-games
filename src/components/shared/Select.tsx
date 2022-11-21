import React from "react"

interface SelectProps {
    name: string
    options: string[]
    onChange: (s: string) => void
    currentValue: string
    isFilter?: boolean
}

const Select = ({name, options, onChange, currentValue, isFilter}: SelectProps) => {
    return (
        <div>
        <label>{name}</label>
        <select className="form-select bg-dark text-white" onChange={(e) => onChange(e.target.value)}>
            {isFilter && <option value="">All</option>}
            {options.map((option) => <option key={option} value={option} selected={currentValue === option}>{option}</option>) }
        </select>
        </div>
    )
}

export default Select