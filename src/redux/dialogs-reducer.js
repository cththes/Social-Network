const SEND_MESSAGE = "dialogsPage/SEND-MESSAGE";

let initialState = {
  messages: [{ message: "( ͡° ͜ʖ ͡°)", id: 1 }],
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
    case SEND_MESSAGE:
      let text = action.newMessageText;
      if (text !== "") {
        return {
          ...state,
          messages: [...state.messages, { id: 2, message: text }],
        };
      } else return state;
    default:
      return state;
  }
};

export const sendMessage = (newMessageText) => ({
  type: SEND_MESSAGE,
  newMessageText,
});

export default dialogsReducer;
