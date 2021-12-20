import React from "react";
import styles from "./Users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        fullName: "Nick Land",
        status: "Tomorrow can take care of itself",
        photoUrl: "https://avatars.githubusercontent.com/u/94492515?v=4",
        location: { country: "United Kingdom", city: "" },
        followed: true,
      },
      {
        id: 2,
        fullName: "William S. Burroughs",
        status: "Sodomy is as old as the human species",
        photoUrl:
          "https://sun9-39.userapi.com/impg/aa8FV1Bl6x7Uk9S4cZzvLcRDq0Cne7ibHfAuWg/g01BmlmJwdk.jpg?size=676x676&quality=96&sign=c20773a545931e6e30d40811396b915a&type=album",
        location: { country: "U.S", city: "Lawrence" },
        followed: false,
      },
      {
        id: 3,
        fullName: "Friedrich W. Nietzsche",
        status:
          "Единственная причина, почему я не кончил как Эллиот Роджер заключается в том, что у меня не было BMW",
        photoUrl:
          "https://biography-live.ru/wp-content/uploads/2019/05/friedrich-nietzsche-9423452-1-402.jpg",
        location: { country: "German Empire", city: "Weimar" },
        followed: false,
      },
      {
        id: 4,
        fullName: "Tomonobu Itagaki",
        status:
          'At first it was easier, but when the testers said "this is too difficult", I made it even more difficult',
        photoUrl:
          "https://sun9-29.userapi.com/impg/ifMOZGJmA-OGOTUEl19naKnUPB-LCF02AX1oTA/nMVeSRznZaE.jpg?size=179x179&quality=96&sign=f66bd9cb5681d8f7bbd86d00d68baeb7&type=album",
        location: { country: "Japan", city: "Tokyo" },
        followed: true,
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <div className={styles.user}>
            <div>
              <span>
                <div>{u.fullName}</div>
                <div className={styles.status}>{u.status}</div>
                <img src={u.photoUrl} alt="" className={styles.userPhoto} />
              </span>
            </div>
            <span>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
