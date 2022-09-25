import React, { useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import { doc, setDoc } from "firebase/firestore";
// const auth = getAuth()
// const signInAction = (auth,email,password) => {
//   createUserWithEmailAndPassword(auth,email,password)
//   .then((user) => {
//     const user
//   })
// }
const SignUpComponent = styled.div`
  @media (max-width: 460px) {
    padding-top: 80px;
  }
  @media (min-width: 460px) {
    padding-top: 80px;
  }
`;
export const SignUp: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const signUpAction = (username: string, email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (result) => {
        const user = result.user;
        if (user) {
          const uid = user.uid;

          const userInitialData = {
            email: email,
            uid: uid,
            name: username,
            password: password,
          };
          const userDocumentRef = doc(db, "users", uid);
          setDoc(userDocumentRef, userInitialData);
        }
      }
    );
  };
  // const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
  //   e.preventDefault();
  //   createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     console.log("user created");
  //     console.log(userCredential)
  //     navigate('/companies')
  //   })
  //   .catch((error) => {
  //     alert(error.message)
  //     console.error(error)
  //   });

  // };
  const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      await signUpAction(username, email, password);
      navigate("/companies");
    } catch {
      alert("アカウント作成に失敗しました");
    }
  };
  return (
    <SignUpComponent>
      <Grid>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            height: "70vh",
            width: "280px",
            m: "20px auto",
          }}
        >
          <Grid
            container
            direction="column"
            justifyContent="flex-start" //多分、デフォルトflex-startなので省略できる。
            alignItems="center"
          >
            <Typography variant={"h5"} sx={{ m: "30px" }}>
              アカウント作成
            </Typography>
          </Grid>
          {/* <TextField
            label="Username"
            variant="standard"
            fullWidth
            required
            value={username}
            onChange={handleUsernameChange}
          /> */}
          <TextField
            type="text"
            label="Username"
            variant="standard"
            fullWidth
            required
            value={username}
            onChange={handleUsernameChange}
          />
          <TextField
            type="email"
            label="e-mail"
            variant="standard"
            fullWidth
            required
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            type="password"
            label="Password"
            variant="standard"
            fullWidth
            required
            value={password}
            onChange={handlePasswordChange}
          />
          {/* ラベルとチェックボックス */}
          <Box mt={3}>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              fullWidth
              onClick={handleSubmit}
            >
              アカウント作成
            </Button>

            <Typography variant="caption" display="block" mt={6}>
              アカウントをお持ちの方はこちら
              <Link href="signin">ログイン</Link>
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </SignUpComponent>
  );
};
