
import { useState } from 'react'
import StartGame from './Components/StartGame'
import GamePlay from './Components/GamePlay';

function App() {
   const [IsGame , setIsGame] = useState(false);
   const toogleGame = () =>{
 setIsGame((prev)=> !prev);
   };
  return (
    <>{IsGame ? <GamePlay/>: <StartGame toggle= {toogleGame}/>}

    </>
  );
}

export default App
