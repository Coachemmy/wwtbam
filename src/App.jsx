// eslint-disable
import './App.css';
import {useEffect, useState} from 'react'
import WWTBAM from './components/WWTBAM';
import Timer from './components/Timer';
import {data, moneyP} from './components/Data'
import Start from './components/Start'

function App() {

  const [name, setName] = useState(null)
  const [questN, setQuestN] = useState(1)
  const [stop, setStop] = useState(false)
  const [earned, setEarned] = useState('₦0')

  

  useEffect(() => {
    questN >1 && setEarned(moneyP.find((m) => m.id === questN - 1).amount)
  }, [moneyP, questN])
  return (

    <div className="App">
      {name ? (
        <> 
         <div className = 'main'>
        {stop ? (
        <h1 className="endText">You earned: {earned} </h1> 
        ) : (
            <> 
                <div className = 'up'>
                    <div className = 'timer'> 
                    <Timer setStop = {setStop} 
                    questN = {questN} /> </div>
                </div>
              

                <div className = 'down'> <WWTBAM 
                  data = {data} 
                  setStop = {setStop}  
                  setQuestN = {setQuestN} 
                  questN = {questN} 
                  /> 
                </div>
                
              </>
        )}

        </div>

      <div className = 'second'>
        <ul className = 'money'> 
          {moneyP.map((m) => (
            <li className = {questN === m.id ? 'moneyNumber active' : 'moneyNumber'}>
              <span className = 'moneyNumberN'>{m.id}</span>
              <span className = 'moneyNumberA'>{m.amount}</span>
          </li>
          ))}
        
          </ul>
      </div>
            
        </>   
      ) :  <Start setName = {setName}  /> }
              
        </div>
  );
}

export default App;
