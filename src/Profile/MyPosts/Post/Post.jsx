import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div>
      <div className={s.item}>
        <img src="https://static01.nyt.com/images/2022/09/16/arts/16CAMERON1/16CAMERON1-mediumSquareAt3X.jpg" />
        post1
        <div>
          <span>Like</span>
        </div>
      </div>
    </div>
  );
};
export default Post;
