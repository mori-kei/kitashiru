import { doc, getDoc } from "firebase/firestore";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
// interface RouterParams {
//   id: string;
// }

export const Company = () => {
  const [companyData, setCompanyData] = useState({});
  // const { companyId } = useParams<{ companyId: string }>();
  const { companyId } = useParams();
  useEffect(() => {
    const companyDocumentRef = doc(db, "family", companyId);
    getDoc(companyDocumentRef).then((documentSnapshot) => {
      if (documentSnapshot.exists()) {
        setCompanyData(documentSnapshot.data());
      }
    });
  }, []);

  return (
    <>
      <p>カンパニーページだよー</p>
      <p>{companyId}</p>
      <p>{companyData.capital}</p>
    </>
  );
};
