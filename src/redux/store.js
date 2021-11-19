import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

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
    this._state.profilePage = profileReducer(
      this._state.profilePage, action
    );
    this._state.dialogsPage = dialogsReducer(
      this._state.dialogsPage, action
    );
    this._callsubscriber(this._state)
  },
};

export default store;
