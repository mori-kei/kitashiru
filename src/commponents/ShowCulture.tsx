import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
const ShowCultureComponent = styled.div`
  @media (max-width: 460px) {
    width: 85%;
    margin: 0 auto;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    border-radius: 30px;
    box-sizing: border-box;
    padding: 20px 30px;

  }
  @media (min-width: 460px) {
    width: 1000px;
    margin-left: 10%;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    border-radius: 30px;
    padding: 20px 30px;
    & p {
      font-size: 20px;
    }
    .sp{
      display:none;
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
      <p>
        あなたの組織文化志向<br className="sp"/> （好みの組織の雰囲気）は<br className="sp"/> 
        {culture == 1 ? <span>家族文化です</span> : null}
        {culture == 2 ? <span>イノベーション文化です</span> : null}
        {culture == 3 ? <span>マーケット文化です</span> : null}
        {culture == 4 ? <span>官僚文化です</span> : null}
      </p>
      <p>
        組織文化志向の強い企業を以下に示しますので、自分にあった企業を探してみてください。
      </p>
    </ShowCultureComponent>
  );
};
