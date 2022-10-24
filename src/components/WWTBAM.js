// eslint-disable
import React, {useState, useEffect} from 'react'
import useSound from 'use-sound'
import intro from '../asset/intro.wav'
import correct from '../asset/correct.mp3'
import wrong from '../asset/wrong.mp3'

const WWTBAM = ({data, setStop, setQuestN, questN}) => {

    const [qt, setQt] = useState(null)
    const [selectedA, setSelectedA] = useState(null)
    const [classN, setClassN] = useState('wwtbamA')
    const [correctAnswer] = useSound(correct)
    const [wrongAnswer] = useSound(wrong)

    const [play] = useSound(intro, { volume: .25 })

    useEffect(() => {
        play();
    }, [play])


    useEffect(() => {
        setQt(data[questN - 1])
    }, [data, questN ])

    const delay = (duration, callback) => {
        setTimeout(() => {
            callback()
        }, duration)

    }

    const handleClick = (item) => {
        setSelectedA(item)
        setClassN('wwtbamA active')
        delay(3000, () => 
            setClassN (item.correct ? 'wwtbamA correct' : 'wwtbamA wrong')
        )

        delay(4000, () => {
            if(item.correct){
                correctAnswer()
                delay(2000, () => {
                setQuestN((prev) => prev + 1)
                setSelectedA(null)
                })
                
            } else {
                wrongAnswer()
                delay(2000, () => { 
                setStop(true)
                })
                
            }
        }
        
    )
        
        
    }

    return (
        <div className = 'wwtbam'>
            <div className = 'wwtbamQ'>{qt?.question}</div>
            <div className = 'wwtbamAs'>
                {qt?.answers.map((item)=> (
                    <div 
                    className = {selectedA === item ? classN : 'wwtbamA'}  
                    onClick = {() => handleClick(item)}> 
                    {item.text}
                    </div>
                ))}
            </div>

            
        </div>
    )
}

export default WWTBAM


