import React from "react";
import './text-up-color.css'

const TextUpColor = ({ label, color }) => {
    return (
        <p className="paragrafo"
            style={{ color: color }}
        >
            {label}
        </p>
    )
}

TextUpColor.defaultProps = {
    color: 'blue'
}

export default TextUpColor;