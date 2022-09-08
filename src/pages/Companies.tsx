import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { db } from "../firebase";

export const Companies = () => {
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

  const [families, setFamilies] = useState<companyData[]>([]);
  // useEffect(() => {
  //   const familiesCollectionRef = collection(db, "family");
  //   getDocs(familiesCollectionRef).then((querySnapshot) => {
  //     setFamilies(
  //       querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  //     );
  //   });
  // }, []);
  return (
    <>
      <Outlet />
    </>
  );
};
