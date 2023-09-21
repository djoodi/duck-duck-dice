import { Box, Stack, Typography} from "@mui/material";
import { DiceType } from "../DiceType";
import RollItem from "./RollItem";


type Props = {
  rolls: DiceType[][];
};

const RollLog = ({ rolls }: Props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      mx={3}
    >
      <Typography variant="h6" textAlign="center" mb={3}>
        Roll Log
      </Typography>
      <Stack direction="column" sx={{height: '70vh', overflow: 'auto'}}>
        {rolls.map((x) => {
          return <RollItem rolls={x} />;
        })}
      </Stack>
    </Box>
  );
};

export default RollLog;
