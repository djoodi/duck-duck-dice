import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useState } from 'react'
import DiceSelector from './components/DiceSelector'
//import './App.css';
import DiceStage from './components/DiceStage';
import { DiceType } from './DiceType';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import NavBar from './components/NavBar';

function App() {
  const [dice, setDice] = useState<DiceType[]>([]);

  const [currentId, setId] = useState<number>(0);

  const newId = () => {
    setId(currentId + 1);
    return currentId;
  }
  
  const addDice = (die: DiceType) => {
    setDice([...dice, {id: newId(), d: die.d, mod: 0}]);
  }

  const removeDice = (die: DiceType) => {
    setDice(dice.filter(x => x.id != die.id))
  }

  return (
    <>
      <NavBar />
      <main>
        <Grid container rowSpacing={2} columns={12}>
          <DiceSelector addDice={addDice}/>
          <DiceStage dice={dice} removeDice={removeDice}/>
        </Grid>
      </main>

    </>
  )
}

export default App
