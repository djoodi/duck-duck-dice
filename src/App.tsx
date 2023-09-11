import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useState } from 'react'
import DiceSelector from './components/DiceSelector'
import './App.css';
import DiceStage from './components/DiceStage';
import { DiceType } from './DiceType';

function App() {
  const [dice, setDice] = useState<DiceType[]>([]);

  const [currentId, setId] = useState<number>(0);

  const newId = () => {
    setId(currentId + 1);
    return currentId;
  }
  
  const addDice = (value: number) => {
    setDice([...dice, {id: newId(), d: value, mod: 0}]);
  }

  const removeDice = (value: number) => {
    setDice(dice.filter(x => x.id != value))
  }

  return (
    <>
      <DiceSelector addDice={addDice}/>
      <DiceStage  />
    </>
  )
}

export default App
