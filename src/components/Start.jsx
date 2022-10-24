import React, {useRef} from 'react'


export default function Start ({setName}) {
    
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.value && setName(inputRef.current.value)
    }

    return (
        <div className = 'start'>
            <input 
            type = 'text' 
            placeholder = 'Enter Your Name' 
            className = 'startInput'
            ref = {inputRef} 
            />
            <button 
            className = 'startButton' 
            onClick = {handleClick}> Start</button>
        </div>
    )
}


