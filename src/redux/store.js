export let store = {
  _state: {
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
  },
  _callsubscriber() {},
  addPost() {
    let newPost = {
      id: 2,
      message: this._state.profilePage.newPostText,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callsubscriber(this._state);
  },
  sendMessage() {
    let newMessage = {
      id: 2,
      message: this._state.dialogsPage.newMessageText,
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = "";
    this._callsubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callsubscriber(this._state);
  },
  updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._callsubscriber(this._state);
  },
  subscribe(observer) {
    this._callsubscriber = observer;
  },
  getState(){
    return(this._state)
  }
};

export default store;
