import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { color } from "@mui/system";
import { Card } from "@mui/material";
import { doc, setDoc, } from "firebase/firestore";
import { db } from "../firebase";

const Cards = styled.div`
  @media (min-width: 460px) {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
const CardItem = styled.div`
  @media (min-width: 460px) {
    width: 40%;
    text-decoration: none !important;
    color: #333;
    margin-top: 20px;

    //カードのcss
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
      rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
      rgba(0, 0, 0, 0.07) 0px 16px 16px;
    border-radius: 25px;
    padding: 20px 25px;

    & a {
      color: #333 !important;
    }
    & h3 {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 5px;
    }
    & p {
      text-indent: -40px;
      padding-left: 40px;
    }
  }
  @media (max-width: 460px) {
    width: 75%;
    text-decoration: none !important;
    color: #333;
    margin: 0 auto;
    margin-top: 20px;

    //カードのcss
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
      rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
      rgba(0, 0, 0, 0.07) 0px 16px 16px;
    border-radius: 25px;
    padding: 20px 25px;

    & a {
      color: #333 !important;
    }
    & h3 {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 5px;
    }
    & p {
      text-indent: -40px;
      padding-left: 40px;
    }
  }
`;
const handleNavigateCount = async ( collectionName, documentName,count) => {
  const companyDoucumentRef = doc(db, collectionName, documentName);
  if (count >= 0) {
    await setDoc(
      companyDoucumentRef,
      {
        count: ++count
      },
      { merge: true }
    );
   
  } else {
    await setDoc(
      companyDoucumentRef,
      {
        count: 1,
      },
      { merge: true }
    );
   
  }
};
export const FamilyData = ({ families }) => {
  return (
    <Cards>
      {families.map((family) => (
        <CardItem key={family.id} onClick={() => handleNavigateCount("family",family.id,family.count)}>
          <Link
            to={`/companies/${family.id}`}
            style={{ textDecoration: "none" }}
          >
            <div>
              <h3 style={{ color: "#34c759" }}>{family.companyName}</h3>
              <p className="industry">業種:{family.industry}</p>
              <p>住所:{family.place}</p>
            </div>
          </Link>
        </CardItem>
      ))}
    </Cards>
  );
};

export const InnovationData = ({ innovations }) => {
  return (
    <Cards>
      {innovations.map((innovation) => (
        <CardItem key={innovation.id} onClick={() => handleNavigateCount("innovation",innovation.id,innovation.count)}>
          <Link
            to={`/companies/${innovation.id}`}
            style={{ textDecoration: "none" }}
          >
            <div>
              <h3 style={{ color: "#ff9500" }}>{innovation.companyName}</h3>
              <p className="industry">業種:{innovation.industry}</p>
              <p>住所:{innovation.place}</p>
            </div>
          </Link>
        </CardItem>
      ))}
    </Cards>
  );
};

export const MarketsData = ({ markets }) => {
  return (
    <Cards>
      {markets.map((market) => (
        <CardItem key={market.id} onClick={() => handleNavigateCount("market",market.id,market.count)}>
          <Link
            to={`/companies/${market.id}`}
            style={{ textDecoration: "none" }}
          >
            <div>
              <h3 style={{ color: "#ff2d55" }}>{market.companyName}</h3>
              <p className="industry">業種:{market.industry}</p>
              <p>住所:{market.place}</p>
            </div>
          </Link>
        </CardItem>
      ))}
    </Cards>
  );
};

export const OfficialssData = ({ officials }) => {
  return (
    <Cards>
      {officials.map((officials) => (
        <CardItem key={officials.id} onClick={() => handleNavigateCount("officials",officials.id,officials.count)}>
          <Link
            to={`/companies/${officials.id}`}
            style={{ textDecoration: "none" }}
          >
            <div>
              <h3 style={{ color: "#00c7be" }}>{officials.companyName}</h3>
              <p className="industry">業種:{officials.industry}</p>
              <p>住所:{officials.place}</p>
            </div>
          </Link>
        </CardItem>
      ))}
    </Cards>
  );
};
