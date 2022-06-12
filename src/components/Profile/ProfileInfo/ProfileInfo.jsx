import React, { useState } from "react";
import styles from "./ProfileInfo.module.css";
import twitterIcon from "../../../assets/images/twitter_icon.png";
import fbIcon from "../../../assets/images/fb_icon.png";
import instagramIcon from "../../../assets/images/Instagram_icon.png";
import vkIcon from "../../../assets/images/vk_icon.png";
import userPhoto from "../../../assets/images/user.jpg";
import Preloader from "./../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
  let [editMode, setEditMode] = useState(false);
  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const saveProfileSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  return (
    <div className={styles.profileInfo}>
      <div>
        <h1 className={styles.fullName}>{profile.fullName}</h1>
        <img src={profile.photos.large || userPhoto} alt="" className={styles.userPhoto} />
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
      <div>
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected} className={styles.inputUploadAvatar} />}
      </div>
      <h2 className={styles.contacts}>
        {editMode ? (
          <ProfileDataForm saveProfileSubmit={saveProfileSubmit} contacts={profile.contacts} />
        ) : (
          <ProfileData
            goToEditMode={() => {
              setEditMode(true);
            }}
            profile={profile}
            isOwner={isOwner}
          />
        )}
      </h2>
    </div>
  );
};

const contactsAreNotEmpty = (value) => value !== "" && value !== null;

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      <span className={styles.contacts}>Contacts</span>
      <div>
        {contactsAreNotEmpty(profile.contacts.facebook) && (
          <span className={styles.item}>
            <a href={profile.contacts.facebook} target="_blank" rel="noreferrer">
              <img src={fbIcon} alt="" className={styles.icon} />
            </a>
          </span>
        )}
        {contactsAreNotEmpty(profile.contacts.vk) && (
          <span className={styles.item}>
            <a href={profile.contacts.vk} target="_blank" rel="noreferrer">
              <img src={vkIcon} alt="" className={styles.icon} />
            </a>
          </span>
        )}
        {contactsAreNotEmpty(profile.contacts.twitter) && (
          <span className={styles.item}>
            <a href={profile.contacts.twitter} target="_blank" rel="noreferrer">
              <img src={twitterIcon} alt={profile.contacts.twitter} className={styles.icon} />
            </a>
          </span>
        )}
        {contactsAreNotEmpty(profile.contacts.instagram) && (
          <span className={styles.item}>
            <a href={profile.contacts.instagram} target="_blank" rel="noreferrer">
              <img src={instagramIcon} alt="" className={styles.icon} />
            </a>
          </span>
        )}
      </div>
      {isOwner && (
        <div>
          <button className={styles.editInfo} onClick={goToEditMode}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileInfo;
