import React from "react";
import styles from "./ProfileInfo.module.css";
import twitterIcon from "../../../assets/images/twitter_icon.png";
import fbIcon from "../../../assets/images/fb_icon.png";
import instagramIcon from "../../../assets/images/Instagram_icon.png";
import vkIcon from "../../../assets/images/vk_icon.png";
import userPhoto from "../../../assets/images/user.jpg";
import Preloader from "./../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
}) => {
  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length[0]) {
      savePhoto(e.target.files[0]);
    }
  };
  return (
    <div className={styles.profileInfo}>
      <h1>{profile.fullName}</h1>
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      <img
        src={profile.photos.large || userPhoto}
        alt=""
        className={styles.userPhoto}
      />
      {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
      <div>
        {profile.contacts.facebook !== null && (
          <span className={styles.item}>
            <a
              href={profile.contacts.facebook}
              target="_blank"
              rel="noreferrer"
            >
              <img src={fbIcon} alt="" className={styles.icon} />
            </a>{" "}
          </span>
        )}
        {profile.contacts.vk !== null && (
          <span className={styles.item}>
            <a href={profile.contacts.vk} target="_blank" rel="noreferrer">
              <img src={vkIcon} alt="" className={styles.icon} />
            </a>
          </span>
        )}
        {profile.contacts.twitter !== null && (
          <span className={styles.item}>
            {" "}
            <a href={profile.contacts.twitter} target="_blank" rel="noreferrer">
              {" "}
              <img
                src={twitterIcon}
                alt={profile.contacts.twitter}
                className={styles.icon}
              />
            </a>
          </span>
        )}

        {profile.contacts.instagram !== null && (
          <span className={styles.item}>
            <a
              href={profile.contacts.instagram}
              target="_blank"
              rel="noreferrer"
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
