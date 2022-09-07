import React, { useState } from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
type Props = {
  ruleOpen?: boolean;
  setRuleOpen: (bool: boolean) => void;
};
const TestRuleParent = styled.div`
  position: relative;
  & div {
    position:absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    top:50px;
    margin: 0 auto;
    width: 80%;
    
    background-color: #fff;
  }
  & .box {
   & div {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    border-radius: 20px;
   }
  }
  @media (max-width: 460px) {
    & .box {
      & div {
        padding:20px 30px;
        
      }
    }
  }
  @media (min-width: 460px) {
    & .box {
      & div {
        padding:20px 30px;
        
        & h1 {
          font-size:24px;
          margin-bottom:30px;
        }
      }
    }
  }
`;
export const TestRule = ({ setRuleOpen }: Props) => {
  const [isLast, setisLast] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("この診断について");
  const [text, setText] = useState<string>(
    "この診断では学術的な指標を用いることであなたが4つの組織文化のうちどの傾向が強いのかを測るのに役立ちます。"
  );

  const changeTitleText = () => {
    setTitle("診断の受け方");
    setText(
      "質問が6つありそれぞれ4つの選択肢があります。企業に求める雰囲気の合計を100としてそれぞれの選択肢がどの程度重要であるか合計値が100になるように振り分けてください"
    );
    setisLast(!isLast);
  };
  return (
    <>
      <TestRuleParent>
        <div className="box">
          <div className="">
          <h1>{title}</h1>
            <p>{text}</p>
            {isLast ? (
              <Button onClick={() => setRuleOpen(false)}>閉じる</Button>
            ) : (
              <Button onClick={changeTitleText}>次へ</Button>
            )}
          </div>
        </div>
      </TestRuleParent>
    </>
  );
};
