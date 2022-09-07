import { doc, getDoc } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
interface RouterParams {
  id: string;
}
export const Company = () => {
  

  const { companyId } = useParams<{ companyId: string }>();
  useEffect(() => {
  
    // // const familiesCollectionRef = collection(db, "family");
    // const companyDocumentRef = doc(db, "famyly", companyId);
    // getDoc(companyDocumentRef).then((documentSnapshot) => {
    //   console.log(documentSnapshot.data());
    // });
  }, []);

  return (
    <>
      <p>カンパニーページだよー</p>
      <p>{companyId}</p>
    </>
  );
};
