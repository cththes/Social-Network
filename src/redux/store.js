const ADD_POST = "ADD-POST";
const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

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
  subscribe(observer) {
    this._callsubscriber = observer;
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    switch (action.type) {
      case ADD_POST: {
        let newPost = {
          id: 2,
          message: this._state.profilePage.newPostText,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callsubscriber(this._state);
        return this._state;
      }
      case SEND_MESSAGE: {
        let newMessage = {
          id: 2,
          message: this._state.dialogsPage.newMessageText,
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = "";
        this._callsubscriber(this._state);
        return this._state;
      }
      case UPDATE_NEW_POST_TEXT: {
        this._state.profilePage.newPostText = action.newText;
        this._callsubscriber(this._state);
        return this._state;
      }
      case UPDATE_NEW_MESSAGE_TEXT: {
        this._state.dialogsPage.newMessageText = action.newText;
        this._callsubscriber(this._state);
        return this._state;
      }
      default:
        return this._state;
    }
  },
};

export default store;
