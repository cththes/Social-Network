let state = {
  profilePage: {
    postsData: [
      { id: "1", message: "hello" },
      { id: "2", message: "it's my 2nd post" },
    ],
  },
  dialogsPage: {
    dialogsData: [
      { name: "cth", id: "1" },
      { name: "FV", id: "2" },
      { name: "Valentin Oblomov", id: "3" },
    ],

    messagesData: [{ message: "hello" }],
  },
};

export let addPost = (postMessage) => {
  let newPost = {
    id: "3",
    message: postMessage,
  };
  state.profilePage.postsData.push(newPost);
};

export default state;
