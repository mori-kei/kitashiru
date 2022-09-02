import React from "react";

type Props = {
  show:boolean
  setShow:() => void
  resultFam:number
  resultInno:number
  resultMar:number
  resultBure:number
  firstQues:number
  secondQues:number
  thirdQues:number
  fourthQues:number
  fifthQues:number
  sixthQues:number
};
const Modal: React.FC<Props> = ({show,setShow,resultFam,resultInno,resultMar,resultBure,firstQues,secondQues,thirdQues,fourthQues,fifthQues,sixthQues}) => {
  const closeModal = () => {
    setShow()
  }
  return <></>;
};
