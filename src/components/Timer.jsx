import {useState, useEffect} from 'react'

const Timer = ({setStop, questN}) => {

    const [timer, setTimer] = useState(30)

    useEffect (() => {
        if (timer === 0) return setStop(true)
        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
        }, [timer, setTimer])
    
        useEffect (() => {
            setTimer(30);
        }, [questN])
    return timer;
    
}
 

export default Timer;