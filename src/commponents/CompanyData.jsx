import React from "react";
import { Link } from "react-router-dom";

export const FamilyData = ({families}) => {
  return (
    <>
       { families.map((family) => (
        <div key={family.id}>
          {family.companyName}
          <Link to={`/companies/${family.id}`}>{family.id}</Link>
        </div>
      ))}
    </>
  )
}

export const InnovationData = ({innovations}) => {
  return (
    <>
       { innovations.map((innovation) => (
        <div key={innovation.id}>
          {innovation.companyName}
          <Link to={`/companies/${innovation.id}`}>{innovation.id}</Link>
        </div>
      ))}
    </>
  )
}

export const MarketsData = ({markets}) => {
  return (
    <>
       { markets.map((market) => (
        <div key={market.id}>
          {market.companyName}
          <Link to={`/companies/${market.id}`}>{market.id}</Link>
        </div>
      ))}
    </>
  )
}

export const OfficialssData = ({officials}) => {
  return (
    <>
       { officials.map((officials) => (
        <div key={officials.id}>
          {officials.companyName}
          <Link to={`/companies/${officials.id}`}>{officials.id}</Link>
        </div>
      ))}
    </>
  )
}