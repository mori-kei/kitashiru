import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { color } from "@mui/system";
import { Card } from "@mui/material";
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
      margin-bottom: 5px;
    }
  }
  @media (max-width: 460px) {
    width: 75%;
    text-decoration: none !important;
    color: #333;
    margin:0 auto;
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
      margin-bottom: 5px;
    }
  }
`;
export const FamilyData = ({ families }) => {
  return (
    <Cards>
      {families.map((family) => (
        <CardItem key={family.id}>
          <Link
            to={`/companies/${family.id}`}
            style={{ textDecoration: "none" }}
          >
            <div>
              <h3 style={{ color: "#34c759" }}>{family.companyName}</h3>
              <p className="industry">{family.industry}</p>
              <p>{family.place}</p>
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
        <CardItem key={innovation.id}>
          <Link
            to={`/companies/${innovation.id}`}
            style={{ textDecoration: "none" }}
          >
            <div>
              <h3 style={{ color: "#ff9500" }}>{innovation.companyName}</h3>
              <p className="industry">{innovation.industry}</p>
              <p>{innovation.place}</p>
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
        <CardItem key={market.id}>
          <Link
            to={`/companies/${market.id}`}
            style={{ textDecoration: "none" }}
          >
            <div>
              <h3 style={{ color: "#ff2d55" }}>{market.companyName}</h3>
              <p className="industry">{market.industry}</p>
              <p>{market.place}</p>
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
        <CardItem key={officials.id}>
          <Link
            to={`/companies/${officials.id}`}
            style={{ textDecoration: "none" }}
          >
            <div>
              <h3 style={{ color: "#00c7be" }}>{officials.companyName}</h3>
              <p className="industry">{officials.industry}</p>
              <p>{officials.place}</p>
            </div>
          </Link>
        </CardItem>
      ))}
    </Cards>
  );
};
