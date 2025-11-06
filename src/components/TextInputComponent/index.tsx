import * as React from "react";

interface TextInputComponentProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    label: string,
    textInputValue?: string,
    htmlFor: string
    id: string
}

const TextInputComponent = ({onChange, label, textInputValue, htmlFor, id}: TextInputComponentProps) => {
    return (
        <div>
            <label htmlFor={htmlFor}>{label}</label>
            <input type="text" id={id} onChange={onChange} value={textInputValue}>
            </input>
        </div>
    )
}

export default TextInputComponent
