import React from "react";
import { useParams } from "react-router-dom";
function Post() {
  const params = useParams();
  console.log(params);
  return(
    <>
      <h2>SinglePost</h2>
      <p>{params.postId}</p>
    </>
  ) 
}

export default Post;
