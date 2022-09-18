import { Button } from "@mui/material";
import { collection, getDocs, QuerySnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import Image1 from "../img/PC/PC_ph01.jpg";
import Image2 from "../img/PC/PC_ph03.jpg";
import Image1sp from "../img/SP/SP_ph01.jpg";
import Image2sp from "../img/SP/SP_ph03.jpg";
import backgroundimg from "../img/PC/mainvisual.jpg";
import backgroundimgsp from "../img/SP/mainvisual.jpg";
import styled from "@emotion/styled";

const TopPage = styled.div`
  @media (min-width: 460px) {
    padding-top:80px;
    .sp {
      display: none;
    }
    & .main-visual {
      background-size: cover;
      width: 80%;
      max-width: 1776px;
      height: 808px;
      margin: 0 auto;
      color: #fff;
      font-size: 36px;
      line-height: 1.3em;
      position: relative;
      & div {
        width: 504px;
        margin: 0 auto;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translateY(-50%) translateX(-50%);
        transform: translateY(-50%) translateX(-50%);
        text-align: center;
        font-weight: 600;
      }
    }
    & .flex {
      margin-top: 80px;
      display: flex;
    }
    & .content {
      width: 1000px;
      margin: 0 auto;
      padding-top: 50px;
      padding-bottom: 80px;
      h2 {
        font-size: 36px;
        text-align: center;
        font-weight: 600;
        margin-bottom: 30px;
      }
      h3 {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 10px;
      }
      h4 {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 20px;
        margin-bottom: 15px;
      }
      .left {
        text-align: justify;
      }
      .right img {
        width: 420px;
      }
      & .button {
        text-align: center;
        margin-top: 30px;
        & button {
          padding: 20px 10px;
          color: #fff;
          width: 500px;
          margin: 0 auto;
          font-size: 24px;
        }
      }
    }
  }
  @media (max-width: 460px) {
    padding-top: 80px;
    .pc {
      display: none;
    }
    & .main-visual {
      background-size: cover;
      width: 85%;
      margin: 0 auto;
      height: 320px;
      background-size: cover;
      position: relative;
      margin-bottom: 40px;
      & div {
        margin: 0 auto;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translateY(-50%) translateX(-50%);
        transform: translateY(-50%) translateX(-50%);
        text-align: center;
        font-weight: 600;
        color: #fff;
      }
    }
    .content {
      width: 85%;
      margin: 0 auto;
      padding-bottom: 40px;
      h2 {
        text-align: center;
        font-size: 28px;
        font-weight: 600;
        margin-bottom: 30px;
      }
      .flex {
        h3 {
          font-size: 24px;
          font-weight: 600;
        }
        h4 {
          font-weight: 600;
        }
        .description {
          color: #707f89;
        }
      }
      & .button {
        text-align: center;
        margin-top: 30px;
        & button {
          padding: 20px 10px;
          color: #fff;
          width: 50%;
          margin: 0 auto;
          font-size: 16px;
        }
      }
    }
  }
`;
export const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    navigate("/signup");
  };
  return (
    <TopPage>
      <div
        className="main-visual pc"
        style={{ backgroundImage: `url(${backgroundimg})` }}
      >
        <div className="">
          企業の雰囲気と
          <br />
          学生の雰囲気で
          <br />
          あなたに合う会社をマッチング
        </div>
      </div>
      <div
        className="main-visual sp"
        style={{ backgroundImage: `url(${backgroundimgsp})` }}
      >
        <div className="">
          企業の雰囲気と
          <br />
          学生の雰囲気で
          <br />
          あなたに合う会社をマッチング
        </div>
      </div>
      <div className="content">
        <h2>サービス</h2>
        <div className="flex">
          <div className="left">
            <h3>自分に合う企業を知る</h3>
            <h4>自分に合う企業はどんな企業？</h4>
            <div className="description">
              <p>
                事業内容・事業規模・事業内容など、就職活動をする際、考慮しなければならない要素は沢山あります。
                しかし、大学生にとっては企業に就職するのは初めてであるため、どのような企業が自分に合うかわからないことがあるかと思います。
                そこで、企業の職場の雰囲気とあなたの求める職場の雰囲気を測定し、照らし合わせることで企業選びをサポートします。
              </p>
            </div>
          </div>
          <div className="right">
            <div className="">
              <img className="pc" src={Image1} alt="" />
              <img className="sp" src={Image1sp} alt="" />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="left">
            <h3>
              学術的な指標で
              <br className="sp" />
              「職場の雰囲気」を測る
            </h3>
            <h4>6つの質問に答える</h4>
            <div className="description">
              <p>
                この「職場の雰囲気」はいわゆる組織文化に近似する概念だと考えられますが、実はこの組織文化特性は学術的に測定することが可能（Cameron
                and Quinn,
                2009）で、これに基づく企業と学生のマッチングも実現することができます。そこで、本サービスでは自身の志向する組織文化特性を明確化するためのアンケートに回答し、この結果と企業の組織文化特性を照らし合わせることで、最も近い企業を提示します。
              </p>
            </div>
          </div>
          <div className="right">
            <div className="">
              <img className="pc" src={Image2} alt="" />
              <img className="sp" src={Image2sp} alt="" />
            </div>
          </div>
        </div>
        <div className="button">
          <Button
            style={{ backgroundColor: "#00c7be",fontWeight:"600"}}
            onClick={handleNavigate}
          >
            登録してはじめる
          </Button>
         
        </div>
      </div>
    </TopPage>
  );
};
