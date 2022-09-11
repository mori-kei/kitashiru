import { doc, getDoc } from "firebase/firestore";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import styled from "@emotion/styled";
const Outer = styled.div`
  @media (min-width: 460px) {
    width:85%;
    max-width:1220px;
    margin:0 auto;
    .contents{
      width:100%;
      .content{
        margin-top:30px;
        .detail p{
          display:inline;
        }
        .detail .left {
          margin-right:30px;
        }
      }
    }
  }
`;
export const Company = () => {
  const [companyData, setCompanyData] = useState({});
  // const { companyId } = useParams<{ companyId: string }>();
  const { companyId } = useParams();
  useEffect(() => {
    const companyDocumentRef = doc(db, "family", companyId);
    getDoc(companyDocumentRef).then((documentSnapshot) => {
      if (documentSnapshot.exists()) {
        setCompanyData(documentSnapshot.data());
      }else {
        const companyDocumentRef = doc(db,"innovation",companyId);
        getDoc(companyDocumentRef).then((documentSnapshot) => {
          if(documentSnapshot.exists()){
            setCompanyData(documentSnapshot.data())
          }
          else {
            const companyDocumentRef = doc(db,"market",companyId);
            getDoc(companyDocumentRef).then((documentSnapshot) => {
              if(documentSnapshot.exists()){
                setCompanyData(documentSnapshot.data())
              }else {
                const companyDocumentRef = doc(db,"officials",companyId);
                getDoc(companyDocumentRef).then((documentSnapshot) => {
                  if(documentSnapshot.exists()){
                    setCompanyData(documentSnapshot.data())
                  }
                })
              }
            })
          }
        })
      }
    });
  }, []);

  return (
    <>
       <Outer>
        <div className="contents">
          <div className="content">
            <div className="">
              <h1>{companyData.companyName}</h1>
            </div>
            <div className="detail">
              <p className="left">住所:{companyData.place}</p>
              <p >業種：{companyData.industry}</p>
            </div>
          </div>
          <div className="content">
            <div className="">
              <h1>事業内容</h1>
            </div>
            <div className="">
              <p>
              {companyData.contentDetail}
              </p>
            </div>
          </div>
          <div className="content">
            <div className="">
              <h1>自社事業の魅力</h1>
            </div>
            <div className="">
              <p>
                {companyData.myContentCharm}
              </p>
            </div>
          </div>
          <div className="content">
            <div className="circle">
              <p>資本金</p>
              <p>{companyData.capital}</p>
            </div>
            <div className="circle">
              <p>売上</p>
              <p>{companyData.earning}</p>
            </div>
            <div className="circle">
              <p>従業員数</p>
              <p>{companyData.numberOfEmployees}</p>
            </div>
          </div>
          <div className="content">
            <div className="">
              <h1>メッセージ</h1>
            </div>
            <div className="">
              <p>
                {companyData.message}
              </p>
            </div>
          </div>
        </div>
      </Outer>
    </>
  );
};
