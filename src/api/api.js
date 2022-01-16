import * as axios from "axios";

const instanse = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "224a41d9-a6ce-4be0-8a9b-f5a325737a34",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instanse
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  unfollow(userId) {
    return instanse.delete(`unfollow/${userId}`).then((response) => {
      return response.data;
    });
  },
  follow(userId) {
    return instanse.post(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
  getProfile(userId) {
    return instanse.get(`profile/${userId}`).then((response) => {
      return response.data;
    });
  },
};
