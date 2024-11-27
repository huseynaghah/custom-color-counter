import React from 'react'

export const Main = ({ color, children }) => {
    return (
        <div className='main' style={{backgroundColor : color}} >
            {children}
        </div>
    )
}
