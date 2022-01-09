import React from "react";
import styles from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/images/user.jpg";
import { NavLink } from "react-router-dom";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );

    let pages = [];
    for (let i = 1; i <= pagesCount && i <= 256; i++) {
      pages.push(i);
    }

    const setActive = ({ isActive }) =>
      isActive ? styles.activeLink : styles.Link;

    return (
      <div>
        <div className={styles.usersNav}>
          {pages.map((page) => {
            return (
              <NavLink to={"/users/" + page} className={setActive}>
                <span
                  className={
                    this.props.currentPage === page && styles.selectedPage
                  }
                  onClick={() => {
                    this.onPageChange(page);
                  }}
                >
                  {page}{" "}
                </span>
              </NavLink>
            );
          })}
        </div>
        {this.props.users.map((user) => (
          <div key={user.id}>
            <div className={styles.user}>
              <div>
                <span>
                  <div>{user.name}</div>
                  <div className={styles.status}>{user.status}</div>
                  <img
                    src={
                      user.photos.small != null ? user.photos.small : userPhoto
                    }
                    alt=""
                    className={styles.userPhoto}
                  />
                </span>
              </div>
              <span>
                {user.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(user.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(user.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
