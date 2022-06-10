const SEND_MESSAGE = "dialogsPage/SEND-MESSAGE";

type SendMessageActionType = {
  type: typeof SEND_MESSAGE,
  newMessageText: string
}

export type InitialStateType = typeof initialState

type DialogType = {
  id: number
  name: string
}

type MessageType = {
  id: number
  message: string
}

let initialState = {
  messages: [{ message: "( ͡° ͜ʖ ͡°)", id: 1 }] as Array<MessageType>,
  dialogs: [
    { id: 1, name: "sgt. Florida" },
    { id: 2, name: "cth" },
    { id: 3, name: "FV" },
    { id: 4, name: "Valentin Oblomov" },
    { id: 5, name: "ШУТУП" },
  ] as Array<DialogType>,
};

const dialogsReducer = (state = initialState, action: any) => {
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

export const sendMessage = (newMessageText: string): SendMessageActionType => ({
  type: SEND_MESSAGE,
  newMessageText,
});

export default dialogsReducer;
