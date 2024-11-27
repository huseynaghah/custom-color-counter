import React from 'react'
import { useState } from 'react'

export const Input = ({ color, setColor }) => {

    const [checked, setChecked] = useState(false)

    return (
        <div style={{ display: 'flex', gap: '2px' }}>
            <input type="checkbox" onChange={(e) => [
                setChecked(!checked)
            ]} />
            <input type="text" disabled={checked} value={color || ""}
                onInput={(e) => {
                    setColor(e.target.value)
                }}
            />
            <button onClick={async ()=>{
                
                navigator.clipboard.writeText(color).then(()=>{
                    alert('Copied successfully!')
                })
            }}>
                Copy to clipboard
            </button>
        </div>
    )
}
