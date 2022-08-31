import React, { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
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

// const auth = getAuth()
// const signInAction = (auth,email,password) => {
//   createUserWithEmailAndPassword(auth,email,password)
//   .then((user) => {
//     const user
//   })
// }

export const SignIn: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate()
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password).then((user) => {
      console.log('ログイン成功=',user.user.uid)
      navigate("/secret")
    })
    .catch((error) => {
      console.error(error)
    })   
  };
  return (
    <>
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
              サインイン
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
            <Button type="submit" color="primary" variant="contained" fullWidth onClick={handleSubmit}>
              サインイン
            </Button>

            <Typography variant="caption" display="block" mt={6}>
              アカウントを持っていますか？
              <Link href="/signup">アカウントを作成</Link>
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};
