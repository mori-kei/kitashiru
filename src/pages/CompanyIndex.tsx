import { Button } from "@mui/material";
import {
  collection,
  doc,
  DocumentSnapshot,
  getDoc,
  getDocs,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Outlet, useNavigate } from "react-router-dom";
import {
  FamilyData,
  InnovationData,
  MarketsData,
  OfficialssData,
} from "../commponents/CompanyData";
import { db } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import { getAuth } from "firebase/auth";
import { RecomendTest } from "../commponents/RecomendTest";
import { ShowCulture } from "../commponents/ShowCulture";
const CompanyIndexComponent = styled.div`
  @media (min-width: 460px) {
    padding-top: 80px;
    padding-bottom: 30px;
    min-height: 100vh;
  }
  @media (max-width: 460px) {
    padding-top: 80px;
    padding-bottom: 30px;
    min-height: 100vh;
  }
`;
export const CompanyIndex = () => {
  const [userCulture, setUserCulture] = useState();
  const navigate = useNavigate();

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
  const Buttons = styled.div`
    @media (min-width: 460px) {
      width: 500px;
      margin-left: 10%;
      margin-top: 20px;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      & button {
        color: #fff;
      }
    }
    @media (max-width: 460px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 85%;
      margin: 0 auto;
      margin-top: 20px;
      & button {
        width: 45%;
        color: #fff;
        font-size: 10px;
        margin-top: 5px;
      }
    }
  `;
  const [selectedCulture, setSelectedCulture] = useState(0);
  const [families, setFamilies] = useState<companyData[]>([]);
  const [innovations, setInnovations] = useState<companyData[]>([]);
  const [markets, setMarkets] = useState<companyData[]>([]);
  const [officialss, setOfficialss] = useState<companyData[]>([]);
  //??????????????????????????????????????????
  useEffect(() => {
    const familiesCollectionRef = collection(db, "family");
    getDocs(familiesCollectionRef).then((querySnapshot) => {
      setFamilies(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);
  //?????????????????????????????????????????????????????????
  useEffect(() => {
    const innovationsCollectionRef = collection(db, "innovation");
    getDocs(innovationsCollectionRef).then((querySnapshot) => {
      setInnovations(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);
  //???????????????????????????????????????????????????
  useEffect(() => {
    const marketsCollectionRef = collection(db, "market");
    getDocs(marketsCollectionRef).then((querySnapshot) => {
      setMarkets(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);
  //??????????????????????????????????????????
  useEffect(() => {
    const officialssCollectionRef = collection(db, "officials");
    getDocs(officialssCollectionRef).then((querySnapshot) => {
      setOfficialss(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);

  useEffect(() => {
    const user = getAuth().currentUser;

    if (user) {
      console.log(user.uid);
      const userDocumentRef = doc(db, "users", user.uid);
      getDoc(userDocumentRef).then((documentSnapshot) => {
        const userCultureData = documentSnapshot.get("culture");
        console.log(documentSnapshot.get("culture"));
        setUserCulture(userCultureData);
      });
    }
  }, []);
  useEffect(() => {
    if (userCulture == 1) {
      setSelectedCulture(0);
    } else if (userCulture == 2) {
      setSelectedCulture(1);
    } else if (userCulture == 3) {
      setSelectedCulture(2);
    } else if (userCulture == 4) {
      setSelectedCulture(3);
    }
  }, [userCulture]);

  const onClickNavigateTest = () => {
    navigate("/test");
  };
  //   useEffect(() => {
  //     console.log(userCulture);
  // }, [userCulture]);
  return (
    <CompanyIndexComponent>
      {userCulture == undefined ? (
        <RecomendTest onClickNavigateTest={onClickNavigateTest} />
      ) : (
        <ShowCulture culture={userCulture} />
      )}
      <Buttons>
        <Button
          style={{ backgroundColor: "#34c759" }}
          className="family"
          onClick={() => setSelectedCulture(0)}
        >
          ????????????
        </Button>
        <Button
          style={{ backgroundColor: "#ff9500" }}
          className="innovation"
          onClick={() => setSelectedCulture(1)}
        >
          ???????????????????????????
        </Button>
        <Button
          style={{ backgroundColor: "#ff2d55" }}
          className="market"
          onClick={() => setSelectedCulture(2)}
        >
          ?????????????????????
        </Button>
        <Button
          style={{ backgroundColor: "#00c7be" }}
          className="official"
          onClick={() => setSelectedCulture(3)}
        >
          ????????????
        </Button>
      </Buttons>
      {selectedCulture === 0 ? <FamilyData families={families} /> : null}
      {selectedCulture === 1 ? (
        <InnovationData innovations={innovations} />
      ) : null}
      {selectedCulture === 2 ? <MarketsData markets={markets} /> : null}
      {selectedCulture === 3 ? <OfficialssData officials={officialss} /> : null}
      <Outlet />
    </CompanyIndexComponent>
  );
};

