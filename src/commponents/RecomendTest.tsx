import { Button } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
const Recomend = styled.div`
  @media (max-width: 460px) {
    width: 90%;
    margin: 0 auto;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    border-radius: 30px;
    box-sizing: border-box;
    padding: 20px 30px;
  }
  @media (min-width: 460px) {
    width: 450px;
    margin-left: 10%;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    border-radius: 30px;
    padding: 20px 30px;
    & p {
      font-size: 20px;
    }
  }
`;
type Props = {
  onClickNavigateTest: () => void;
};
export const RecomendTest = ({ onClickNavigateTest }: Props) => {
  return (
    <Recomend>
      <p>まだ組織診断をしていないようですね</p>
      <p>自分に合った組織文化を診断してみましょう！</p>
      <Button
        style={{ color: "#fff", fontWeight: "600", backgroundColor: "#00c7be",marginTop:"5px"}}
        onClick={() => onClickNavigateTest()}
      >
        診断する
      </Button>
    </Recomend>
  );
};
