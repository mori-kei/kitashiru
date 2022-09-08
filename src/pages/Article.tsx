import React from "react";
import { useAuth } from "../contexts/AuthContext";
import styled from "@emotion/styled";
const Outer = styled.div`
  @media (min-width: 460px) {
    width:85%;
    max-width:1220px;
    margin:0 auto;
    .contents{
      width:100%;
      .content{
        margin-top:30px;
        .detail p{
          display:inline;
        }
        .detail .left {
          margin-right:30px;
        }
      }
    }
  }
`;
export const Article: React.FC = () => {
  return (
    <>
      <Outer>
        <div className="contents">
          <div className="content">
            <div className="">
              <h1>リサイクルファクトリー株式会社</h1>
            </div>
            <div className="detail">
              <p className="left">住所： 札幌市</p>
              <p >業種：サービス・インフラ</p>
            </div>
          </div>
          <div className="content">
            <div className="">
              <h1>事業内容</h1>
            </div>
            <div className="">
              <p>
                建築廃棄物や食品廃棄物などのリサイクル。リサイクル技術の研究開発。農業資材、土木資材、エネルギー資材の生産、販売。
              </p>
            </div>
          </div>
          <div className="content">
            <div className="">
              <h1>自社事業の魅力</h1>
            </div>
            <div className="">
              <p>
                廃棄物から新たな価値を創造する会社です。常識にとらわれない新しいチャレンジを続けています。千歳市では新千歳空港、北広島市では日ハムボールパークの近くに事業所を構え、長沼町、恵庭市、札幌市へとシェアを拡げています。社会人一年目から８０歳の高齢者、障がい者、外国人と多様な人材がそれぞれの個性を発揮して活躍しています。
              </p>
            </div>
          </div>
          <div className="content">
            <div className="circle">
              <p>資本金</p>
              <p>￥37,500,000</p>
            </div>
            <div className="circle">
              <p>資本金</p>
              <p>￥37,500,000</p>
            </div>
            <div className="circle">
              <p>資本金</p>
              <p>￥37,500,000</p>
            </div>
          </div>
          <div className="content">
            <div className="">
              <h1>メッセージ</h1>
            </div>
            <div className="">
              <p>
                持続可能な社会、循環型社会、地域コミュニティの創造に関心があり問題意識を持っている方、様々な会社を見て社会を広く知りたい方にとっては面白い会社です。
                是非、一度会社見学にいらしてください。
              </p>
            </div>
          </div>
        </div>
      </Outer>
    </>
  );
};
