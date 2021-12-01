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
    case SEND_MESSAGE: {
      let newMessage = {
        id: 2,
        message: state.newMessageText,
      };
      state.messages.push(newMessage);
      state.newMessageText = "";
      return state;
    }

    case UPDATE_NEW_MESSAGE_TEXT: {
      state.newMessageText = action.newText;
      return state;
    }
    default:
      return state;
  }
};

export const sendMessageAC = () => ({ type: SEND_MESSAGE });
export const updateNewMessageTextAC = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

export default dialogsReducer;
