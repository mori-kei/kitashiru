import { Button } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import {
  FamilyData,
  InnovationData,
  MarketsData,
  OfficialssData,
} from "../commponents/CompanyData";
import { db } from "../firebase";

export const CompanyIndex = () => {
  const navigate = useNavigate();
  const { companyId } = useParams();
  console.log(companyId);
  type companyData = {
    id?: string;
    capital?: string;
    companyName?: string;
    companyNumber?: number;
    contentDetail?: string;
    earning?: string;
    industry?: string;
    message?: string;
    myContentCharm?: string;
    numberOfEmpoloyees?: number;
    place?: string;
  };
  const [selectedCulture, setSelectedCulture] = useState(0);
  const [families, setFamilies] = useState<companyData[]>([]);
  const [innovations, setInnovations] = useState<companyData[]>([]);
  const [markets, setMarkets] = useState<companyData[]>([]);
  const [officialss, setOfficialss] = useState<companyData[]>([]);
  //家族文化のデータを持ってくる
  useEffect(() => {
    const familiesCollectionRef = collection(db, "family");
    getDocs(familiesCollectionRef).then((querySnapshot) => {
      setFamilies(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);
  //イノベーション文化のデータを持ってくる
  useEffect(() => {
    const innovationsCollectionRef = collection(db, "innovation");
    getDocs(innovationsCollectionRef).then((querySnapshot) => {
      setInnovations(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);
  //マーケット文化のデータを持ってくる
  useEffect(() => {
    const marketsCollectionRef = collection(db, "market");
    getDocs(marketsCollectionRef).then((querySnapshot) => {
      setMarkets(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);
  //官僚文化のデータを持ってくる
  useEffect(() => {
    const officialssCollectionRef = collection(db, "officials");
    getDocs(officialssCollectionRef).then((querySnapshot) => {
      setOfficialss(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);
  return (
    <>
      <Button onClick={() => setSelectedCulture(0)}>家族文化を見る</Button>
      <Button onClick={() => setSelectedCulture(1)}>
        イノベーション文化を見る
      </Button>
      <Button onClick={() => setSelectedCulture(2)}>
        マーケット文化を見る
      </Button>
      <Button onClick={() => setSelectedCulture(3)}>官僚文化を見る</Button>
      {selectedCulture === 0 ? <FamilyData families={families} /> : null}
      {selectedCulture === 1 ? (
        <InnovationData innovations={innovations} />
      ) : null}
      {selectedCulture === 2 ? <MarketsData markets={markets} /> : null}
      {selectedCulture === 3 ? <OfficialssData officials={officialss} /> : null}
      <Outlet />
    </>
  );
};

// const familyComponent = () => {
//   families.map((family) => (
//     <div key={family.id}>
//       {family.companyName}
//       <Link to={`/companies/${family.id}`}>{family.id}</Link>
//     </div>
//   ))
// }
