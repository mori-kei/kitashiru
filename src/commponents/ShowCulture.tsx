import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
const ShowCultureComponent = styled.div`
  @media (max-width: 460px) {
    width: 90%;
    margin: 0 auto;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    border-radius: 30px;
    box-sizing: border-box;
    padding: 20px 30px;
  }
  @media (min-width: 460px) {
    width: 400px;
    margin-left:10%;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    border-radius: 30px;
    padding: 20px 30px;
    & p {
      font-size: 20px;
    }
  }
`;
type Props = {
  culture: number;
};
export const ShowCulture = ({ culture }: Props) => {
  const [cultureString, setCultureString] = useState("");
  
  // useEffect(() => {

  // }, [culture])
  console.log(culture);
  return (
    <ShowCultureComponent>
      <p>あなたの組織文化は</p>
      {culture == 1 ? <p>家族文化です</p> : null}
      {culture == 2 ? <p>イノベーション文化です</p> : null}
      {culture == 3 ? <p>マーケット文化です</p> : null}
      {culture == 4 ? <p>官僚文化です</p> : null}
    </ShowCultureComponent>
  );
};
