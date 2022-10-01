import React from "react";
import styled from "@emotion/styled";
import family from "../img/PC/family.png";
import familySP from "../img/SP/family.png";
import market from "../img/PC/market.png";
import marketSP from "../img/SP/market.png";
import bure from "../img/PC/Bure.png";
import bureSP from "../img/SP/bure.png";
import innovation from "../img/PC/innovation.png";
import innovationSP from "../img/SP/innovation.png";
const CultureCommponent = styled.div`
  @media (max-width: 460px) {
    padding-top: 80px;
    h1 {
      text-align: center;
      font-weight: 600;
      margin-bottom:30px;
    }
    h2 {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 20px;
      text-align:center;
    }
    .culture-part {
      width: 85%;
      padding: 20px 30px;
      box-sizing: border-box;
      margin: 0 auto;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
      border-radius: 30px;
      margin-bottom: 30px;
    }
    img {
      width: 80%;
      text-align: center;
    }
    .img-box {
      width: 100%;
      margin-top: 10px;
      text-align: center;
    }
    .pc {
      display: none;
    }
  }
  @media (min-width: 460px) {
    padding-top: 80px;
    h1 {
      font-weight: 600;
      text-align: center;
      margin-bottom: 50px;
    }
    .culture-part {
      padding: 20px 30px;
      width: 850px;
      margin: 0 auto;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
      border-radius: 30px;
      margin-bottom: 30px;
    }
    .inner {
      display: flex;
      & div {
        & h2 {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 20px;
        }
        & img {
          width: 300px;
        }
      }
    }
    .sp {
      display: none;
    }
  }
`;
export const Culture = () => {
  return (
    <CultureCommponent>
      <h1>組織文化特性</h1>
      <div className="culture-part">
        <div className="inner">
          <div className="">
            <h2>家族文化</h2>
            <div className="">
              <p>
                人々が多くのものを共有する非常にフレンドリーな職場。組織は人材が成長することの長期的なメリットを重視し、一体感とやる気を非常に重視する。顧客への心配りと人々への気遣いがあることが組織の成功と定義される。
              </p>
            </div>
          </div>
          <div className="img-box">
            <img className="pc" src={family} alt="" />
            <img className="sp" src={familySP} alt="" />
          </div>
        </div>
      </div>
      <div className="culture-part">
        <div className="inner">
          <div className="">
            <h2>イノベーション文化 </h2>
            <div className="">
              <p>
                ダイナミックであり、起業家精神にあふれクリエイティブな職場。時代の最先端にいることが重視される。組織が長期的に重視するのは成長と新しい資源の獲得である。ユニークかつ新しい商品やサービスを生みだすことが成功を意味する。
              </p>
            </div>
          </div>
          <div className="img-box">
            <img className="pc" src={innovation} alt="" />
            <img className="sp" src={innovationSP} alt="" />
          </div>
        </div>
      </div>
      <div className="culture-part">
        <div className="inner">
          <div className="">
            <h2>マーケット文化 </h2>
            <div className="">
              <p>
                過程ではなく、結果を重視する組織。競争力のある行動や測定可能なゴール・
                目標を達成することが長期的関心事である。競合他社に勝てるような製品・サービス価格の設定や
                市場シェアリーダーシップが組織の成功と定義される。
              </p>
            </div>
          </div>
          <div className="img-box">
            <img className="pc" src={market} alt="" />
            <img className="sp" src={marketSP} alt="" />
          </div>
        </div>
      </div>
      <div className="culture-part">
        <div className="inner">
          <div className="">
            <h2>官僚文化</h2>
            <div className="">
              <p>
                非常に形式的で構造化された職場。決められた手
                順や手続きが人々の活動を規定する。信頼できる製品・サービスの供給、スムーズな日程調整、そして低コストが組織の成功と定義される。
              </p>
            </div>
          </div>
          <div className="img-box">
            <img className="pc" src={bure} alt="" />
            <img className="sp" src={bureSP} alt="" />
          </div>
        </div>
      </div>
    </CultureCommponent>
  );
};
