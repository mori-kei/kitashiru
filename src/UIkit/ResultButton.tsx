import React from "react";
import { Button } from "@mui/material";
type Props = {
  firstQues: number;
  secondQues: number;
  thirdQues: number;
  fourthQues: number;
  fifthQues: number;
  sixthQues: number;
  openModal:() => void
  trueText: string;
  falseText: string;
};
export const ResultButton: React.FC<Props> = ({
  firstQues,
  secondQues,
  thirdQues,
  fourthQues,
  fifthQues,
  sixthQues,
  openModal,
  trueText,
  falseText,
}) => {
  if(firstQues ===100 && secondQues ===100 && thirdQues ===100 && fourthQues ===100 && fifthQues === 100 && sixthQues ===100){
    return(
      <>
        <Button  onClick={openModal}
          color="secondary"
          variant="contained"
        >{trueText}</Button>
      </>
     
    )
}
else {
  return (
    <>
      <Button  variant="contained" disabled>{falseText}</Button>
    </>
   
  )
}
}
