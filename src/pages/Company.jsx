import { doc, getDoc, setDoc } from "firebase/firestore";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
const Outer = styled.div`
  @media (min-width: 460px) {
    width: 85%;
    max-width: 1220px;
    margin: 0 auto;
    padding-top: 80px;
    min-height: 100vh;
    padding-bottom: 30px;
    .contents {
      width: 100%;
      .content {
        padding-bottom: 15px;
        border-bottom: 1px solid #e3e4e5;
        h1 {
          margin-bottom: 5px;
        }
        .company-name {
          text-align: center;
          font-weight: 600 !important;
        }
        .detail {
          text-align: center;
        }
        & .circle {
          position: relative;
          display: inline-block;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          border: 1px solid #e3e4e5;
          box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
          line-height: 150px;
          margin-right: 20px;
          & p {
            position: absolute;
            display: inline-block;
            left: 0;
            top: 50%;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
            width: 150px;
            text-align: center;
          }
        }
        margin-top: 30px;
        .detail p {
          display: inline;
        }
        .detail .left {
          margin-right: 30px;
        }
      }
    }
    .button-outer {
      width: 85%;
      margin: 0 auto;
      text-align: center;
      margin-top: 30px;
      button {
        width: 800px;
      }
    }
  }
  @media (max-width: 460px) {
    width: 85%;
    margin: 0 auto;
    padding-top: 80px;
    padding-bottom: 20px;
    & .contents {
      width: 100%;
    }
    & .content {
      padding-bottom: 15px;
      border-bottom: 1px solid #e3e4e5;
      padding-top: 20px;
      & h1 {
        margin-bottom: 5px;
      }
      & .circle {
        position: relative;
        display: block;
        width: 150px;
        height: 150px;
        border-radius: 50%;

        line-height: 150px;
        margin: 0 auto;
        margin-top: 20px;
        border: 1px solid #e3e4e5;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

        & p {
          position: absolute;
          display: inline-block;
          left: 0;
          top: 50%;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
          width: 150px;
          text-align: center;
        }
      }
    }
    .button-outer {
      width: 85%;
      margin: 0 auto;
      text-align: center;
      margin-top: 30px;
      button {
        width: 100%;
      }
    }
  }
`;
export const Company =  () => {
  const [companyData, setCompanyData] = useState({});
  
  const { companyId } = useParams();
  const [culture,setCulture] = useState("")
  useEffect(() => {
     
    const companyDocumentRef = doc(db, "family", companyId);
    getDoc(companyDocumentRef).then((documentSnapshot) => {
      if (documentSnapshot.exists()) {
        setCompanyData(documentSnapshot.data());
        setCulture("family")
      } else {
        const companyDocumentRef = doc(db, "innovation", companyId);
        getDoc(companyDocumentRef).then((documentSnapshot) => {
          if (documentSnapshot.exists()) {
            setCompanyData(documentSnapshot.data());
            setCulture("innovation")
          } else {
            const companyDocumentRef = doc(db, "market", companyId);
            getDoc(companyDocumentRef).then((documentSnapshot) => {
              if (documentSnapshot.exists()) {
                setCompanyData(documentSnapshot.data());
                setCulture("market")
              } else {
                const companyDocumentRef = doc(db, "officials", companyId);
                getDoc(companyDocumentRef).then((documentSnapshot) => {
                  if (documentSnapshot.exists()) {
                    setCompanyData(documentSnapshot.data());
                    setCulture("officials")
                  }
                });
              }
            });
          }
        });
      }
    });
    console.log("test")
    console.log(companyData)
  }, []);
useEffect(() => {
  const getData = async() => {
    
    const companyDoucumentRef = doc(db,culture,companyId)
    const count = companyData.count
    if (count >= 0) {
    await setDoc(
      companyDoucumentRef,
      {
        count: count + 1,
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
  }
  getData()
}, [culture])

  return (
    <>
      <Outer>
        <div className="contents">
          <div className="content">
            <div className="company-name">
              <h1>{companyData.companyName}</h1>
            </div>
            <div className="detail">
              <p className="left">??????:{companyData.place}</p>
              <p>?????????{companyData.industry}</p>
            </div>
          </div>
          <div className="content">
            <div className="">
              <h1>????????????</h1>
            </div>
            <div className="">
              <p>{companyData.contentDetail}</p>
            </div>
          </div>
          <div className="content">
            <div className="">
              <h1>?????????????????????</h1>
            </div>
            <div className="">
              <p>{companyData.myContentCharm}</p>
            </div>
          </div>
          <div className="content">
            <div className="circle">
              <p>
                ?????????
                <br />
                {companyData.capital}
              </p>
              <p></p>
            </div>
            <div className="circle">
              <p>
                ?????? <br /> {companyData.earning}
              </p>
            </div>
            <div className="circle">
              <p>
                ???????????? <br />
                {companyData.numberOfEmployees}
              </p>
            </div>
          </div>
          <div className="content">
            <div className="">
              <h1>???????????????</h1>
            </div>
            <div className="">
             {companyData.message}
            </div>
          </div>
          {companyData == null ? null : (
            <div className="button-outer">
              <Button
                style={{
                  color: "#fff",
                  fontWeight: "600",
                  backgroundColor: "#00c7be",
                }}
                variant="contained"
                target="_blank"
                href={companyData.HP}
              >
                ????????????????????????????????????
              </Button>
            </div>
          )}
        </div>
      </Outer>
    </>
  );
};
