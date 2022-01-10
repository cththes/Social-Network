const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  messages: [{ message: "( ͡° ͜ʖ ͡°)", id: 1 }],
  newMessageText: "",
  dialogs: [
    { id: 1, name: "sgt. Florida" },
    { id: 2, name: "cth" },
    { id: 3, name: "FV" },
    { id: 4, name: "Valentin Oblomov" },
    { id: 5, name: "ШУТУП" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      return { ...state, newMessageText: action.text };
    case SEND_MESSAGE:
      let text = state.newMessageText;
      if (text !== "") {
        return {
          ...state,
          newMessageText: "",
          messages: [...state.messages, { id: 2, message: text }],
        };
      } else return state;
    default:
      return state;
  }
};

export const sendMessage = () => ({ type: SEND_MESSAGE });
export const updateNewMessageText = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  text,
});

export default dialogsReducer;
