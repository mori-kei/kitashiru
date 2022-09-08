import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useAuth } from "../contexts/AuthContext";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export const Header: React.FC = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const clickSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("signIn");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const { currentUser } = useAuth();
  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            きたしる
          </Typography>
          <Button onClick={() => navigate("/")} color="inherit">
            企業を見る
          </Button>
          {currentUser ? (
            <Button color="inherit" onClick={clickSignOut}>
              ログアウト
            </Button>
          ) : (
            <Button color="inherit">ログイン</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
