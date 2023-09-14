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
        Log
      </Typography>
      <Stack direction="column-reverse">
        {rolls.map((x) => {
          return <RollItem rolls={x} />;
        })}
      </Stack>
    </Box>
  );
};

export default RollLog;
