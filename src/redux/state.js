let state = {
  profilePage: {
    posts: [{ message: "hello", id: 1 }],
    newPostText: "",
  },
  dialogsPage: {
    messages: [{ id: 1, message: "( ͡° ͜ʖ ͡°)" }],
    newMessageText: "",
    dialogs: [
      { id: 1, name: "sgt. Florida" },
      { id: 2, name: "cth" },
      { id: 3, name: "FV" },
      { id: 4, name: "Valentin Oblomov" },
      { id: 5, name: "ШУТУП" },
    ],
  },
};

let rerenderEntireTree

export const subscribe = (observer) =>{
  rerenderEntireTree = observer;
}

export let addPost = () => {
  let newPost = {
    id: 2,
    message: state.profilePage.newPostText,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText=''
  rerenderEntireTree(state);
};

export let sendMessage = () => {
  let newMessage = {
    id: 2,
    message: state.dialogsPage.newMessageText,
  };
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = '';
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export let updateNewMessageText = (newText) =>{
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree(state);
}

export default state;
