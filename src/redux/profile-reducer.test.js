import profileReducer, { addPost, deletePost } from "./profile-reducer";
import { render, screen } from "@testing-library/react";

let state = {
  posts: [{ message: "Tomorrow can take care of itself", id: 1 }],
};

it("length of posts should be incremented", () => {
  let action = addPost("it-kamasutra.com");
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(2);
});

it("message of new post should be cth.com", () => {
  //1.test data
  let action = addPost("cth.com");
  //2.action
  let newState = profileReducer(state, action);
  //3.expectation
  expect(newState.posts[1].message).toBe("cth.com");
});

it("after deleting length of messages should be decrement", () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(0);
});
it("after deleting length shouldn't be decrement if id is incorrect", () => {
  let action = deletePost(1000);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(1);
});
