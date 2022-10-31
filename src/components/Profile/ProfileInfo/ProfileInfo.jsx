import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg"></img>
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  );
};
export default ProfileInfo;
