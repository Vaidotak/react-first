import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
 
 const newPosts = props.posts.map((p) => (<Post like={p.like} message={p.message} />))

 let newPostElement = React.createRef()

let addPost =()=>{
  let text = newPostElement.current.value
  alert(text)
}

  return (
    <div className={style.MyPosts}>
      <div className={style.postsBlock}>
       <h3>My posts</h3>
        <div><textarea ref={newPostElement}></textarea></div>
        <button onClick={addPost}>...post...</button>
      </div>
      <div className={style.postsBlock}>
        {newPosts}
      </div>
    </div>
  );
};
export default MyPosts;
