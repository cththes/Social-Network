import React from "react";
import styles from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import twitterIcon from "../../../assets/images/twitter_icon.png";
import fbIcon from "../../../assets/images/fb_icon.png";
import instagramIcon from "../../../assets/images/Instagram_icon.png";
import vkIcon from "../../../assets/images/vk_icon.png";
import Preloader from "./../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  
  return (
    <div className={styles.profileInfo}>
      <h1>{props.profile.fullName}</h1>
      <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      <img src={props.profile.photos.large} alt="" />
      <div>
        {props.profile.contacts.facebook !== null && (
          <span className={styles.item}>
            <a
              href={props.profile.contacts.facebook}
              target="_blank"
            >
              <img src={fbIcon} alt="" className={styles.icon} />
            </a>{" "}
          </span>
        )}
        {props.profile.contacts.vk !== null && (
          <span className={styles.item}>
            <a href={props.profile.contacts.vk} target="_blank">
              <img src={vkIcon} alt="" className={styles.icon} />
            </a>
          </span>
        )}
        {props.profile.contacts.twitter !== null && (
          <span className={styles.item}>
            {" "}
            <a
              href={props.profile.contacts.twitter}
              target="_blank"
            >
              {" "}
              <img
                src={twitterIcon}
                alt={props.profile.contacts.twitter}
                className={styles.icon}
              />
            </a>
          </span>
        )}

        {props.profile.contacts.instagram !== null && (
          <span className={styles.item}>
            <a
              href={props.profile.contacts.instagram}
              target="_blank"
            >
              {" "}
              <img src={instagramIcon} alt="" className={styles.icon} />
            </a>
          </span>
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
