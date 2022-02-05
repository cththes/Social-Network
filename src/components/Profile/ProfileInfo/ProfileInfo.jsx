import React from "react";
import styles from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
  return (
    <div>
      <img src={props.profile.photos.large} alt="" />
      <ProfileStatus status={"я борис"}/>
      <div>
        <span className={styles.item}>UserId:</span> {props.profile.userId}
      </div>
      <div>
        <span className={styles.item}>AboutMe:</span> {props.profile.aboutMe}
      </div>
      <div>
        <span className={styles.item}>FullName:</span> {props.profile.fullName}
      </div>
      <div>
        <span className={styles.item}>LookingForAJobDescription:</span>{" "}
        {props.profile.lookingForAJobDescription}
      </div>
      <div>
        <span className={styles.item}>LookingForAJob:</span>{" "}
        {props.profile.lookingForAJob}
      </div>
      <div>
        <span className={styles.item}>Facebook:</span>{" "}
        {props.profile.contacts.facebook}
      </div>
      <div>
        <span className={styles.item}>Website:</span>{" "}
        {props.profile.contacts.website}
      </div>
      <div>
        <span className={styles.item}>Vk:</span> {props.profile.contacts.vk}
      </div>
      <div>
        <span className={styles.item}>Twitter:</span>{" "}
        {props.profile.contacts.twitter}
      </div>
      <div>
        <span className={styles.item}>Instagram:</span>{" "}
        {props.profile.contacts.instagram}
      </div>
      <div>
        <span className={styles.item}>Youtube:</span>{" "}
        {props.profile.contacts.youtube}
      </div>
      <div>
        <span className={styles.item}>Github:</span>{" "}
        {props.profile.contacts.github}
      </div>
      <div>
        <span className={styles.item}>MainLink:</span>{" "}
        {props.profile.contacts.mainLink}
      </div>
    </div>
  );
};

export default ProfileInfo
