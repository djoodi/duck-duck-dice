import { Button } from '@mui/material';
import '../DiceType';
import { DiceType } from '../DiceType';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

type Props = {
    die: DiceType;
    onClickHandler: (die: DiceType) => void;
}

const Die = ({die, onClickHandler}: Props) => {



    return (
        <Grid>
            <Button variant="contained" onClick={()=>onClickHandler(die)}>{die.d}</Button>
        </Grid>
    )
}

export default Die;