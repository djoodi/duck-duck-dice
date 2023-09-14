import Die from "./Die";
import { DiceType } from "../DiceType";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Stack, TextField, Typography, styled } from "@mui/material";

type Props = {
  dice: DiceType[];
  removeDice: (die: DiceType) => void;
  setModifier: (die: DiceType, mod: number) => void;
};

const ModifierTextField = styled(TextField)({
  width: "60px",
  margin: "auto",
  marginTop: "5px",
  textAlign: "center",
});

const StyledBox = styled(Box)({
  border: "1px solid black",
  borderRadius: "10px",
  minHeight: "225px",
});

const DiceStage = ({ dice, removeDice, setModifier }: Props) => {
  return (
    <StyledBox m={3}>
      <Typography variant="h6" fontWeight={500} textAlign="center" mt={2} component="h3">2. Add modifiers, or click to remove dice</Typography>
      <Grid container spacing={1} justifyContent="center" p={2}>
        {dice.map((x) => {
          return (
            <Stack key={x.id}>
              <Die die={x} onClickHandler={removeDice} />
              <ModifierTextField
                id="outlined-basic"
                label="mod"
                variant="outlined"
                size="small"
                type="number"
                onChange={(e) => setModifier(x, parseInt(e.target.value))}
              />
            </Stack>
          );
        })}
      </Grid>
    </StyledBox>
  );
};

export default DiceStage;
