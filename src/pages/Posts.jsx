import React from "react";
import { Outlet } from "react-router-dom";

function Posts() {
  return (
    <>
      <h2>Posts</h2>
      <p>外側だよ</p>
      <Outlet />
    </>
  );
}

export default Posts;
