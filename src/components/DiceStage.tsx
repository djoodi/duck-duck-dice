import Die from './Die';
import { DiceType } from '../DiceType';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

type Props = {
    dice: DiceType[],
    removeDice: (die:DiceType)=>void;
}

const DiceStage = ({dice, removeDice}: Props) => {
  return (
    <Grid container spacing={1} xs={12}>
      {dice.map(x => {
        return <Die key={x.id} die={x} onClickHandler={removeDice} />
        // TODO: return a div instead containing the Die AND the modinput - Judie 9/12/23
      })}
    </Grid>
  )
}

export default DiceStage;