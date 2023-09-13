import { Box, Divider, Typography, styled } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";
import { DiceType } from "../DiceType";

type Props = {
  rolls: DiceType[];
};

const ContainerBox = styled(Box)({
  border: "1px solid black",
  borderRadius: "10px",
});

const DieBox = styled(Box)({
  border: "1px solid black",
  borderRadius: "5px",
});

const RollItem = ({ rolls }: Props) => {
  const totalRoll = () => {
    let total = 0;
    rolls.forEach((x) => {
      total += x.d + x.mod;
    });
    return total;
  };

  return (
    <Box mb={2}>
        <Typography variant='h6'>CharacterName</Typography>
      <ContainerBox>
        <Box display="flex">
          <Box
            p={1}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Typography>TOTAL</Typography>
            <Typography variant="h5" component="p">
              {totalRoll()}
            </Typography>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box display="flex" flexWrap="wrap">
            {rolls.map((x) => {
              return (
                <DieBox display="flex" m={1} height="fit-content">
                  <Box p={1}>{`d${x.id}`}</Box>
                  <Divider orientation="vertical" flexItem />
                  <Box p={1}>{`${x.d}${x.mod != 0 ? ` + ${x.mod}` : ""}`}</Box>
                </DieBox>
              );
            })}
          </Box>
        </Box>
      </ContainerBox>
    </Box>
  );
};

export default RollItem;
