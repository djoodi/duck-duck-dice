import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { DiceType } from "../DiceType";
import Die from "./Die";
import { Stack, Typography } from "@mui/material";

type Props = {
  addDice: (die: DiceType) => void;
};

export default function DiceSelector({ addDice }: Props) {
  return (
    <Stack alignItems="center" mb={3}>
      <Typography variant="h6" component="h2">1. Select your dice</Typography>
      <Grid container spacing={1} justifyContent="Center">
        <Die die={{ id: 1, d: 4, mod: 0 }} onClickHandler={addDice} />
        <Die die={{ id: 2, d: 6, mod: 0 }} onClickHandler={addDice} />
        <Die die={{ id: 3, d: 8, mod: 0 }} onClickHandler={addDice} />
        <Die die={{ id: 4, d: 10, mod: 0 }} onClickHandler={addDice} />
        <Die die={{ id: 5, d: 12, mod: 0 }} onClickHandler={addDice} />
        <Die die={{ id: 6, d: 20, mod: 0 }} onClickHandler={addDice} />
      </Grid>
    </Stack>
  );
}
