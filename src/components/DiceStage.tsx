
import React from 'react'
import Dice from './Dice';
import { DiceType } from '../DiceType';

type Props = {
    dice: DiceType[],
    removeDice: (value:number)=>void;
}

const DiceStage = () => {
  return (
    <div>

    </div>
  )
}

export default DiceStage;