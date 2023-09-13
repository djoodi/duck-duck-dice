import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { DiceType } from "../DiceType";
import RollItem from "./RollItem";

type Props = {
  rolls: DiceType[][];
};

const RollLog = ({ rolls }: Props) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      sx={{ width: { xl: "60%", lg: "70%" }, margin: "auto", marginTop: "20px" }}
    >
      <Typography variant="h6" textAlign="center">
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
