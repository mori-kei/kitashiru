import { Button } from "@mui/material";
import { collection, getDocs, QuerySnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { db } from "../firebase";

export const Companies = () => {
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
  const handleClick = (params: any) => {
    navigate("/company", { state: params });
  };
  const [families, setFamilies] = useState<companyData[]>([]);
  useEffect(() => {
    const familiesCollectionRef = collection(db, "family");
    getDocs(familiesCollectionRef).then((querySnapshot) => {
      setFamilies(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);
  return (
    <>
      <h2>企業一覧</h2>
      <Outlet />
    </>
  );
};
