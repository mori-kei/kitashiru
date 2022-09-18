import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useAuth } from "../contexts/AuthContext";
import { getAuth, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { Drawer, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";
import styled from "@emotion/styled";
const HeaderComponent = styled.div`
    @media (max-width: 460px) {
      .pc {
        display:none;
      }
      
    }
    @media (min-width: 460px) {
        .sp {
          display:none;
        }
    }
`;
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
  const [open, setopen] = useState(false);
  const toggleOpen = () => {
    setopen(!open);
  };
  const { currentUser } = useAuth();
  return (
    <HeaderComponent>
      <Box sx={{ flexGrow: 2 }}>
        <AppBar position="fixed" style={{ backgroundColor: "#fff" }}>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              style={{ color: "#333", fontWeight: "600" }}
            >
              <Link to={"/"} style={{ textDecoration: "none", color: "#333" }}>
                きたしる
              </Link>
            </Typography>
            {currentUser ? (
              <Button
                onClick={() => navigate("/test")}
                style={{ color: "#6B6668", fontWeight: "600" }}
                className="pc"
              >
                組織診断
              </Button>
            ) : null}
            {currentUser ? (
              <Button
                onClick={() => navigate("/companies")}
                style={{ color: "#6B6668", fontWeight: "600" }}
                className="pc"
              >
                企業を見る
              </Button>
            ) : null}

            {currentUser ? (
              <Button
                color="inherit"
                onClick={clickSignOut}
                style={{
                  color: "#fff",
                  fontWeight: "600",
                  backgroundColor: "#00c7be",
                }}
                variant="contained"
                className="pc"
              >
                ログアウト
              </Button>
            ) : (
              <Button
                color="inherit"
                onClick={() => navigate("/signin")}
                style={{  color: "#fff",
                fontWeight: "600",
                backgroundColor: "#00c7be", }}
                variant="contained"
                className="pc"
              >
                ログイン
              </Button>
            )}
            <IconButton onClick={toggleOpen} className="sp">
              <Menu />
            </IconButton>
            <Drawer anchor="right" open={open} onClose={toggleOpen}>
              {currentUser ? (
                <Button
                  onClick={() => navigate("/test")}
                  style={{ color: "#6B6668", fontWeight: "600" }}
                >
                  組織診断
                </Button>
              ) : null}
              {currentUser ? (
                <Button
                  onClick={() => navigate("/companies")}
                  style={{ color: "#6B6668", fontWeight: "600" }}
                >
                  企業を見る
                </Button>
              ) : null}
              {currentUser ? (
                <Button
                  color="inherit"
                  onClick={clickSignOut}
                  style={{
                    color: "#fff",
                    fontWeight: "600",
                    backgroundColor: "#00c7be",
                  }}
                  variant="contained"
                >
                  ログアウト
                </Button>
              ) : (
                <Button
                  color="inherit"
                  onClick={() => navigate("/signin")}
                  style={{ color: "#fff",
                  fontWeight: "600",
                  backgroundColor: "#00c7be", }}
                  variant="contained"
                >
                  ログイン
                </Button>
              )}
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </HeaderComponent>
  );
};
