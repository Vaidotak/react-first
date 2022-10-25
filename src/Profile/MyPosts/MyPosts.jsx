import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts =()=>{
    return(
        <div className={s.MyPosts}>
       
        <div>
          My posts
          <div className={s.posts}>
          <textarea></textarea>
          <button>post</button>
        </div>
        <Post like='2' message='Labas, ką tu?' />
        <Post like='5' message='Sveiki' />
        </div>
      </div>
    )
}
export default MyPosts;
