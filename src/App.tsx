import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useState } from "react";
import DiceSelector from "./components/DiceSelector";
//import './App.css';
import DiceStage from "./components/DiceStage";
import { DiceType } from "./DiceType";
import NavBar from "./components/NavBar";
import { Box, Button, Divider, Typography } from "@mui/material";
import RollLog from "./components/RollLog";
import Grid2 from "@mui/material/Unstable_Grid2";

function App() {
  const [dice, setDice] = useState<DiceType[]>([]);
  const [rolls, setRolls] = useState<DiceType[][]>([]);
  // this is so we can set a key for each dice we select
  const [currentId, setId] = useState<number>(0);

  const newId = () => {
    setId(currentId + 1);
    return currentId;
  };

  const addDice = (die: DiceType) => {
    setDice([...dice, { id: newId(), d: die.d, mod: 0 }]);
  };

  const removeDice = (die: DiceType) => {
    setDice(dice.filter((x) => x.id != die.id));
  };

  const setModifier = (die: DiceType, mod: number) => {
    setDice(
      dice.map((x) => {
        if (x.id == die.id) return { id: x.id, d: x.d, mod: mod };
        else return x;
      })
    );
  };

  const rollDice = () => {
    if (dice.length == 0) return;
    let diceRolls: DiceType[] = [];
    dice.forEach((x) => {
      const r = Math.floor(Math.random() * x.d) + 1;
      diceRolls.push({ id: x.d, d: r, mod: x.mod });
    });
    setRolls([diceRolls, ...rolls]);
  };

  return (
    <>
      <NavBar />
      <Grid2 container m={3}>
        <Grid2 xs={12} md={6} pr={{xs: 0, md: 3}}>
          <DiceSelector addDice={addDice} />
          <Box display="flex" justifyContent="center" gap={2}>
            <Button
              variant="contained"
              size="large"
              onClick={() => rollDice()}
              disabled={dice.length == 0}
            >
              <Typography variant="h5" component="p" fontWeight={600}>
                ROLL
              </Typography>
            </Button>
            <Button
              variant="contained"
              size="large"
              onClick={() => setDice([])}
              disabled={dice.length == 0}
            >
              <Typography variant="h5" component="p" fontWeight={600}>
                CLEAR
              </Typography>
            </Button>
          </Box>
          <DiceStage
            dice={dice}
            removeDice={removeDice}
            setModifier={setModifier}
          />
        </Grid2>
        <Divider orientation="vertical" flexItem sx={{mr: "-1px", display:{xs:'none', md:'block'}}}/>
        <Grid2 xs={12} md={6} pl={{xs: 0, md: 3}}>
          <RollLog rolls={rolls} />
        </Grid2>
      </Grid2>
    </>
  );
}

export default App;
