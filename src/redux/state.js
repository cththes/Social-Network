import rerenderEntireTree from "./../render";
let state = {
  profilePage: {
    posts: [
      { message: "hello", id: 1 },
    ],
  },
  dialogsPage: {
    messages: [
      { id: 1, message: "( ͡° ͜ʖ ͡°)" },
    ],
    dialogs: [
      { id: 1, name: "sgt. Florida" },
      { id: 2, name: "cth" },
      { id: 3, name: "FV" },
      { id: 4, name: "Valentin Oblomov" },
      { id: 5, name: "ШУТУП" },
    ],
  },
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 2,
    message: postMessage,
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export let sendMessage = (postMessage) => {
  let newMessage = {
    id: 2,
    message: postMessage,
  };
  state.dialogsPage.messages.push(newMessage);
  rerenderEntireTree(state);
};

export default state;
